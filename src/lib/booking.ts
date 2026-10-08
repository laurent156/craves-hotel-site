import { BOOKING } from '../config/site';
import type { Locale } from '../i18n/locales';

export interface BookingRequest {
  locale: Locale;
  /** ISO date, YYYY-MM-DD */
  arrival?: string;
  /** ISO date, YYYY-MM-DD */
  departure?: string;
}

const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;

function parseIsoDate(value: string | undefined): Date | null {
  if (!value || !ISO_DATE.test(value)) return null;
  const date = new Date(`${value}T00:00:00Z`);
  if (Number.isNaN(date.getTime())) return null;
  // Reject impossible dates such as 2026-02-30, which Date silently rolls over.
  return date.toISOString().slice(0, 10) === value ? date : null;
}

/** Deep link to the Lighthouse booking engine, with the direct-booking code pre-applied. */
export function buildBookingUrl({ locale, arrival, departure }: BookingRequest): string {
  const params = new URLSearchParams({ lang: locale });

  const from = parseIsoDate(arrival);
  const to = parseIsoDate(departure);
  if (from && to && to > from) {
    params.set('Arrival', arrival as string);
    params.set('Departure', departure as string);
  }

  params.set('DiscountCode', BOOKING.discountCode);
  return `${BOOKING.engineUrl}?${params.toString()}`;
}
