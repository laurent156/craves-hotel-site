// Pure date logic for the booking calendar. Dates are ISO strings (YYYY-MM-DD) in the visitor's
// calendar; computations use UTC noon-free arithmetic on Y/M/D so time zones and DST never shift a day.

export type IsoDate = string;

export interface Range {
  arrival?: IsoDate;
  departure?: IsoDate;
}

export interface YearMonth {
  year: number;
  /** 0 = January. */
  month: number;
}

const pad = (n: number) => String(n).padStart(2, '0');

function toIso(year: number, month: number, day: number): IsoDate {
  const d = new Date(Date.UTC(year, month, day));
  return `${d.getUTCFullYear()}-${pad(d.getUTCMonth() + 1)}-${pad(d.getUTCDate())}`;
}

function parts(iso: IsoDate): [number, number, number] {
  const [y, m, d] = iso.split('-').map(Number);
  return [y, m - 1, d];
}

export function addDays(iso: IsoDate, days: number): IsoDate {
  const [y, m, d] = parts(iso);
  return toIso(y, m, d + days);
}

export function nights(arrival: IsoDate, departure: IsoDate): number {
  const [y1, m1, d1] = parts(arrival);
  const [y2, m2, d2] = parts(departure);
  return Math.round((Date.UTC(y2, m2, d2) - Date.UTC(y1, m1, d1)) / 86_400_000);
}

export function shiftMonth({ year, month }: YearMonth, delta: number): YearMonth {
  const total = year * 12 + month + delta;
  return { year: Math.floor(total / 12), month: ((total % 12) + 12) % 12 };
}

/** Weeks of a month, Monday first, padded with null outside the month. */
export function monthGrid(year: number, month: number): (IsoDate | null)[][] {
  const daysInMonth = new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
  const offset = (new Date(Date.UTC(year, month, 1)).getUTCDay() + 6) % 7;
  const cells: (IsoDate | null)[] = [
    ...Array<null>(offset).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => toIso(year, month, i + 1)),
  ];
  while (cells.length % 7) cells.push(null);
  return Array.from({ length: cells.length / 7 }, (_, w) => cells.slice(w * 7, w * 7 + 7));
}

/** Click logic: arrival first, then a later departure; anything else restarts the selection. */
export function nextRange(range: Range, clicked: IsoDate): Range {
  if (range.arrival && !range.departure && clicked > range.arrival) {
    return { arrival: range.arrival, departure: clicked };
  }
  return { arrival: clicked };
}
