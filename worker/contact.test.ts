import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import { onRequestPost } from './contact';

const ENV = {
  TURNSTILE_SECRET_KEY: 'secret',
  RESEND_API_KEY: 're_test',
  MAIL_FROM: 'Craves Hotel website <website@craves-hotel.com>',
  CONTACT_TO: 'info@craves-hotel.com',
  MANAGER_TO: 'manager@craves-hotel.com, reception@craves-hotel.com',
};

const MANAGER = {
  kind: 'manager',
  locale: 'en',
  roomNumber: '204',
  fullName: 'John Smith',
  email: 'john@example.com',
  message: 'The air conditioning is not working.',
  'cf-turnstile-response': 'token',
};

const post = (body: unknown, headers: Record<string, string> = {}) =>
  new Request('https://craves-hotel.com/api/contact', {
    method: 'POST',
    headers: { Origin: 'https://craves-hotel.com', ...headers },
    body: typeof body === 'string' ? body : JSON.stringify(body),
  });

describe('POST /api/contact', () => {
  const fetchMock = vi.fn();

  beforeEach(() => {
    fetchMock.mockReset();
    // Turnstile says yes, Resend accepts.
    fetchMock.mockImplementation(async (url: string) =>
      url.includes('turnstile') ? Response.json({ success: true }) : Response.json({ id: 'email_1' }),
    );
    vi.stubGlobal('fetch', fetchMock);
    vi.spyOn(console, 'error').mockImplementation(() => undefined);
  });

  afterEach(() => vi.unstubAllGlobals());

  test('sends the message to the management addresses, with the guest in reply-to', async () => {
    const response = await onRequestPost({ request: post(MANAGER), env: ENV });

    expect(response.status).toBe(200);
    const resend = fetchMock.mock.calls.find(([url]) => String(url).includes('resend'));
    const sent = JSON.parse(resend![1].body);
    expect(sent.to).toEqual(['manager@craves-hotel.com', 'reception@craves-hotel.com']);
    expect(sent.reply_to).toBe('john@example.com');
    expect(sent.from).toBe(ENV.MAIL_FROM);
    expect(sent.subject).toContain('204');
    expect(resend![1].headers.Authorization).toBe('Bearer re_test');
  });

  test('sends the contact form to the contact addresses', async () => {
    const contact = {
      kind: 'contact',
      locale: 'fr',
      firstName: 'Marie',
      lastName: 'Dupont',
      email: 'marie@example.com',
      subject: 'Ma réservation',
      message: 'Bonjour',
      consent: 'on',
      'cf-turnstile-response': 'token',
    };

    const response = await onRequestPost({ request: post(contact), env: ENV });

    expect(response.status).toBe(200);
    const resend = fetchMock.mock.calls.find(([url]) => String(url).includes('resend'));
    expect(JSON.parse(resend![1].body).to).toEqual(['info@craves-hotel.com']);
  });

  test('answers a bot that filled the hidden field as if it worked, and sends nothing', async () => {
    const response = await onRequestPost({ request: post({ ...MANAGER, website: 'http://spam.example' }), env: ENV });

    expect(response.status).toBe(200);
    expect(fetchMock).not.toHaveBeenCalled();
  });

  test('rejects an invalid message without calling any service', async () => {
    const response = await onRequestPost({ request: post({ ...MANAGER, email: 'nope' }), env: ENV });

    expect(response.status).toBe(422);
    expect(fetchMock).not.toHaveBeenCalled();
  });

  test('refuses a message when Turnstile does not confirm a human', async () => {
    fetchMock.mockImplementation(async () => Response.json({ success: false }));

    const response = await onRequestPost({ request: post(MANAGER), env: ENV });

    expect(response.status).toBe(403);
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  test('refuses a message without a Turnstile token', async () => {
    const { 'cf-turnstile-response': _token, ...withoutToken } = MANAGER;

    const response = await onRequestPost({ request: post(withoutToken), env: ENV });

    expect(response.status).toBe(403);
  });

  test('refuses requests that come from another site', async () => {
    const response = await onRequestPost({ request: post(MANAGER, { Origin: 'https://evil.example' }), env: ENV });

    expect(response.status).toBe(403);
    expect(fetchMock).not.toHaveBeenCalled();
  });

  test('fails closed when a setting is missing, instead of skipping the anti-spam check', async () => {
    const { TURNSTILE_SECRET_KEY: _secret, ...withoutSecret } = ENV;

    const response = await onRequestPost({ request: post(MANAGER), env: withoutSecret });

    expect(response.status).toBe(500);
    expect(fetchMock).not.toHaveBeenCalled();
  });

  test('reports an error when the e-mail provider refuses the message', async () => {
    fetchMock.mockImplementation(async (url: string) =>
      url.includes('turnstile') ? Response.json({ success: true }) : new Response('nope', { status: 500 }),
    );

    const response = await onRequestPost({ request: post(MANAGER), env: ENV });

    expect(response.status).toBe(502);
  });

  test('rejects a body that is not JSON or is too large', async () => {
    expect((await onRequestPost({ request: post('not json'), env: ENV })).status).toBe(400);
    expect((await onRequestPost({ request: post('x'.repeat(21_000)), env: ENV })).status).toBe(413);
  });
});
