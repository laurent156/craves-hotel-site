import { describe, expect, test } from 'vitest';
import { buildBookingUrl } from './booking';

const ROOMS = 'https://bookingengine.mylighthouse.com/v2/10550/Rooms/Select';
const START = 'https://bookingengine.mylighthouse.com/v2/10550';

describe('buildBookingUrl', () => {
  test('without dates, opens the date step, which keeps the THANKYOU code (Rooms/Select would drop it)', () => {
    const url = new URL(buildBookingUrl({ locale: 'fr' }));

    expect(`${url.origin}${url.pathname}`).toBe(START);
    expect(url.searchParams.get('lang')).toBe('fr');
    expect(url.searchParams.get('DiscountCode')).toBe('THANKYOU');
    expect(url.searchParams.has('Arrival')).toBe(false);
    expect(url.searchParams.has('Departure')).toBe(false);
  });

  test('passes the stay dates when departure is after arrival', () => {
    const url = new URL(
      buildBookingUrl({ locale: 'nl', arrival: '2026-11-12', departure: '2026-11-14' }),
    );

    expect(`${url.origin}${url.pathname}`).toBe(ROOMS);
    expect(url.searchParams.get('lang')).toBe('nl');
    expect(url.searchParams.get('DiscountCode')).toBe('THANKYOU');
    expect(url.searchParams.get('Arrival')).toBe('2026-11-12');
    expect(url.searchParams.get('Departure')).toBe('2026-11-14');
  });

  test('drops the dates when departure is not after arrival', () => {
    const url = new URL(
      buildBookingUrl({ locale: 'en', arrival: '2026-11-14', departure: '2026-11-14' }),
    );

    expect(url.searchParams.has('Arrival')).toBe(false);
    expect(url.searchParams.has('Departure')).toBe(false);
  });

  test('drops the dates when one of them is missing or malformed', () => {
    const missing = new URL(buildBookingUrl({ locale: 'en', arrival: '2026-11-12' }));
    const malformed = new URL(
      buildBookingUrl({ locale: 'en', arrival: '12/11/2026', departure: '2026-11-14' }),
    );
    const impossible = new URL(
      buildBookingUrl({ locale: 'en', arrival: '2026-02-30', departure: '2026-03-02' }),
    );
    const outOfRange = new URL(
      buildBookingUrl({ locale: 'en', arrival: '2026-13-45', departure: '2026-14-02' }),
    );

    for (const url of [missing, malformed, impossible, outOfRange]) {
      expect(url.searchParams.has('Arrival')).toBe(false);
      expect(url.searchParams.has('Departure')).toBe(false);
    }
  });
});
