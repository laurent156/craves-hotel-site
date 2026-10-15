// Handler of POST /api/contact (see worker/index.ts): receives the contact form and the message to the
// management, checks it (anti-spam, validation) and e-mails it to the hotel team through Resend.
// Settings (Cloudflare dashboard → Workers & Pages → the project → Settings → Variables and secrets):
//   TURNSTILE_SECRET_KEY  secret key of the Turnstile widget
//   RESEND_API_KEY        Resend API key (the sending domain must be verified in Resend)
//   MAIL_FROM             sender, e.g. "Craves Hotel website <website@craves-hotel.com>"
//   CONTACT_TO            recipients of the contact form, comma separated
//   MANAGER_TO            recipients of the message to the management, comma separated
import { buildEmail, parseSubmission } from '../src/lib/contactForm';

export interface Env {
  TURNSTILE_SECRET_KEY?: string;
  RESEND_API_KEY?: string;
  MAIL_FROM?: string;
  CONTACT_TO?: string;
  MANAGER_TO?: string;
}

const MAX_BODY_BYTES = 20_000;
const TURNSTILE_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
const RESEND_URL = 'https://api.resend.com/emails';

const json = (body: Record<string, unknown>, status: number): Response =>
  new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' } });

const recipients = (list: string | undefined): string[] =>
  (list ?? '')
    .split(',')
    .map((address) => address.trim())
    .filter(Boolean);

async function passesTurnstile(token: unknown, secret: string, ip: string | null): Promise<boolean> {
  if (typeof token !== 'string' || token === '') return false;
  const body = new URLSearchParams({ secret, response: token });
  if (ip) body.set('remoteip', ip);
  const response = await fetch(TURNSTILE_URL, { method: 'POST', body });
  const result = (await response.json()) as { success?: boolean };
  return result.success === true;
}

export const onRequestPost = async ({ request, env }: { request: Request; env: Env }): Promise<Response> => {
  // Only the site itself may post here.
  const origin = request.headers.get('Origin');
  if (origin && new URL(origin).host !== new URL(request.url).host) return json({ ok: false }, 403);

  const raw = await request.text();
  if (raw.length > MAX_BODY_BYTES) return json({ ok: false }, 413);
  let payload: Record<string, unknown>;
  try {
    payload = JSON.parse(raw) as Record<string, unknown>;
  } catch {
    return json({ ok: false }, 400);
  }

  const parsed = parseSubmission(payload);
  // A bot that filled the hidden field gets the same answer as a real guest, and nothing is sent.
  if (!parsed.ok && parsed.spam) return json({ ok: true }, 200);
  if (!parsed.ok) return json({ ok: false, errors: parsed.errors }, 422);

  const { TURNSTILE_SECRET_KEY, RESEND_API_KEY, MAIL_FROM } = env;
  const to = recipients(parsed.data.kind === 'manager' ? env.MANAGER_TO : env.CONTACT_TO);
  if (!TURNSTILE_SECRET_KEY || !RESEND_API_KEY || !MAIL_FROM || to.length === 0) {
    console.error('contact form: missing settings (Turnstile, Resend, sender or recipients)');
    return json({ ok: false }, 500);
  }

  const human = await passesTurnstile(payload['cf-turnstile-response'], TURNSTILE_SECRET_KEY, request.headers.get('CF-Connecting-IP'));
  if (!human) return json({ ok: false }, 403);

  const email = buildEmail(parsed.data);
  const sent = await fetch(RESEND_URL, {
    method: 'POST',
    headers: { Authorization: `Bearer ${RESEND_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ from: MAIL_FROM, to, reply_to: email.replyTo, subject: email.subject, text: email.text }),
  });
  if (!sent.ok) {
    console.error(`contact form: Resend answered ${sent.status}`);
    return json({ ok: false }, 502);
  }
  return json({ ok: true }, 200);
};

export const methodNotAllowed = (): Response => json({ ok: false }, 405);
