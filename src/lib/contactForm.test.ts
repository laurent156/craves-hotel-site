import { describe, expect, test } from 'vitest';
import { buildEmail, parseSubmission } from './contactForm';

const CONTACT = {
  kind: 'contact',
  locale: 'fr',
  firstName: 'Marie',
  lastName: 'Dupont',
  email: 'marie@example.com',
  subject: 'Ma réservation',
  bookingNumber: 'AB123',
  message: 'Pouvez-vous confirmer mon arrivée tardive ?',
  consent: 'on',
};

const MANAGER = {
  kind: 'manager',
  locale: 'en',
  roomNumber: '204',
  fullName: 'John Smith',
  email: 'john@example.com',
  phone: '+32 470 00 00 00',
  message: 'The air conditioning is not working.',
};

describe('parseSubmission', () => {
  test('accepts a complete contact message', () => {
    const result = parseSubmission(CONTACT);

    expect(result).toEqual({
      ok: true,
      data: expect.objectContaining({ kind: 'contact', firstName: 'Marie', email: 'marie@example.com' }),
    });
  });

  test('accepts a manager message without phone number', () => {
    const { phone: _phone, ...withoutPhone } = MANAGER;

    expect(parseSubmission(withoutPhone)).toMatchObject({ ok: true });
  });

  test('lists every missing required field', () => {
    const result = parseSubmission({ kind: 'manager', locale: 'en', email: 'x@example.com' });

    expect(result).toEqual({ ok: false, errors: expect.arrayContaining(['roomNumber', 'fullName', 'message']) });
  });

  test('rejects an invalid email address', () => {
    expect(parseSubmission({ ...CONTACT, email: 'not-an-email' })).toEqual({ ok: false, errors: ['email'] });
  });

  test('requires consent on the contact form', () => {
    const { consent: _consent, ...withoutConsent } = CONTACT;

    expect(parseSubmission(withoutConsent)).toEqual({ ok: false, errors: ['consent'] });
  });

  test('rejects an unknown form kind or language', () => {
    expect(parseSubmission({ ...CONTACT, kind: 'newsletter' })).toMatchObject({ ok: false });
    expect(parseSubmission({ ...CONTACT, locale: 'de' })).toMatchObject({ ok: false });
  });

  test('rejects a message that is too long', () => {
    expect(parseSubmission({ ...CONTACT, message: 'x'.repeat(5001) })).toEqual({ ok: false, errors: ['message'] });
  });

  test('flags a filled honeypot field as spam', () => {
    expect(parseSubmission({ ...CONTACT, website: 'http://spam.example' })).toEqual({ ok: false, errors: [], spam: true });
  });

  test('trims surrounding whitespace', () => {
    const result = parseSubmission({ ...MANAGER, fullName: '  John Smith  ' });

    expect(result).toMatchObject({ ok: true, data: { fullName: 'John Smith' } });
  });

  test('does not modify the object it receives', () => {
    const input = Object.freeze({ ...CONTACT });

    expect(() => parseSubmission(input)).not.toThrow();
  });
});

describe('buildEmail', () => {
  const contact = parseSubmission(CONTACT);
  const manager = parseSubmission(MANAGER);
  if (!contact.ok || !manager.ok) throw new Error('fixtures must be valid');

  test('puts the guest in reply-to so the team can answer directly', () => {
    expect(buildEmail(contact.data).replyTo).toBe('marie@example.com');
    expect(buildEmail(manager.data).replyTo).toBe('john@example.com');
  });

  test('flags the manager message as urgent with the room number in the subject', () => {
    const email = buildEmail(manager.data);

    expect(email.subject).toContain('204');
    expect(email.subject.toLowerCase()).toContain('manager');
    expect(email.text).toContain('The air conditioning is not working.');
    expect(email.text).toContain('+32 470 00 00 00');
  });

  test('names the contact topic and guest in the subject', () => {
    const email = buildEmail(contact.data);

    expect(email.subject).toContain('Ma réservation');
    expect(email.subject).toContain('Marie Dupont');
    expect(email.text).toContain('AB123');
  });

  test('never lets a guest inject extra mail headers through a field', () => {
    const attack = parseSubmission({ ...MANAGER, fullName: 'John\r\nBcc: spam@example.com' });
    if (!attack.ok) throw new Error('fixture must be valid');

    expect(buildEmail(attack.data).subject).not.toMatch(/[\r\n]/);
  });
});
