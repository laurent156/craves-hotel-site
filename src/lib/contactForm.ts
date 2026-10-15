import { LOCALES, type Locale } from '../i18n/locales';

// Validation and e-mail composition shared by the contact form, the hidden "manager" form and the
// Cloudflare worker that sends them (worker/contact.ts). Pure: no network, no side effects.

export type FormKind = 'contact' | 'manager';

export interface ContactSubmission {
  kind: 'contact';
  locale: Locale;
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  bookingNumber: string;
  message: string;
}

export interface ManagerSubmission {
  kind: 'manager';
  locale: Locale;
  roomNumber: string;
  fullName: string;
  email: string;
  phone: string;
  message: string;
}

export type Submission = ContactSubmission | ManagerSubmission;

export type ParseResult =
  | { ok: true; data: Submission }
  | { ok: false; errors: string[]; spam?: true };

export interface Email {
  subject: string;
  text: string;
  replyTo: string;
}

const MAX_SHORT = 120;
const MAX_MESSAGE = 5000;
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

type Raw = Readonly<Record<string, unknown>>;

const text = (raw: Raw, key: string): string => (typeof raw[key] === 'string' ? (raw[key] as string).trim() : '');

/** Fields that must be present, with their maximum length. */
const REQUIRED: Record<FormKind, Record<string, number>> = {
  contact: { firstName: MAX_SHORT, lastName: MAX_SHORT, subject: MAX_SHORT, message: MAX_MESSAGE },
  manager: { roomNumber: 20, fullName: MAX_SHORT, message: MAX_MESSAGE },
};

const OPTIONAL: Record<FormKind, Record<string, number>> = {
  contact: { bookingNumber: 40 },
  manager: { phone: 40 },
};

/** Checks the fields of a submitted form and returns a clean copy, or the names of the invalid fields. */
export function parseSubmission(raw: Raw): ParseResult {
  // Hidden field a human never fills: a bot that does is dropped without telling it why.
  if (text(raw, 'website') !== '') return { ok: false, errors: [], spam: true };

  const kind = raw.kind;
  if (kind !== 'contact' && kind !== 'manager') return { ok: false, errors: ['kind'] };
  const locale = raw.locale;
  if (typeof locale !== 'string' || !(LOCALES as readonly string[]).includes(locale)) {
    return { ok: false, errors: ['locale'] };
  }

  const errors: string[] = [];
  const values: Record<string, string> = {};
  const check = (field: string, max: number, required: boolean) => {
    const value = text(raw, field);
    if ((required && value === '') || value.length > max) errors.push(field);
    values[field] = value;
  };

  Object.entries(REQUIRED[kind]).forEach(([field, max]) => check(field, max, true));
  Object.entries(OPTIONAL[kind]).forEach(([field, max]) => check(field, max, false));

  const email = text(raw, 'email');
  if (!EMAIL.test(email) || email.length > 254) errors.push('email');
  if (kind === 'contact' && !raw.consent) errors.push('consent');

  if (errors.length) return { ok: false, errors };
  return { ok: true, data: { kind, locale: locale as Locale, email, ...values } as unknown as Submission };
}

/** One line, no control characters: a field can never add a header to the e-mail. */
const oneLine = (value: string): string => value.replace(/[\u0000-\u001f\u007f]+/g, ' ').trim();

/** The e-mail the hotel team receives. Plain text on purpose: nothing a guest types is ever interpreted as HTML. */
export function buildEmail(data: Submission): Email {
  if (data.kind === 'manager') {
    return {
      subject: oneLine(`[Manager] Room ${data.roomNumber} – ${data.fullName}`),
      replyTo: data.email,
      text: [
        'Direct message to the management (website form)',
        '',
        `Room: ${data.roomNumber}`,
        `Name: ${data.fullName}`,
        `Email: ${data.email}`,
        `Phone / WhatsApp: ${data.phone || '-'}`,
        `Language: ${data.locale}`,
        '',
        data.message,
      ].join('\n'),
    };
  }
  const name = `${data.firstName} ${data.lastName}`;
  return {
    subject: oneLine(`[Website] ${data.subject} – ${name}`),
    replyTo: data.email,
    text: [
      'Message from the contact form (website)',
      '',
      `Name: ${name}`,
      `Email: ${data.email}`,
      `Subject: ${oneLine(data.subject)}`,
      `Booking number: ${data.bookingNumber || '-'}`,
      `Language: ${data.locale}`,
      '',
      data.message,
    ].join('\n'),
  };
}
