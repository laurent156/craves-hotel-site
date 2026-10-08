import { describe, expect, test } from 'vitest';
import { addDays, monthGrid, nextRange, nights, shiftMonth } from './calendar';

describe('monthGrid', () => {
  test('starts weeks on Monday and pads with null (November 2026 starts on a Sunday)', () => {
    const weeks = monthGrid(2026, 10);

    expect(weeks[0]).toEqual([null, null, null, null, null, null, '2026-11-01']);
    expect(weeks[1][0]).toBe('2026-11-02');
    expect(weeks.flat().filter(Boolean)).toHaveLength(30);
    expect(weeks.every((w) => w.length === 7)).toBe(true);
  });
});

describe('nextRange', () => {
  test('first click sets the arrival', () => {
    expect(nextRange({}, '2026-11-12')).toEqual({ arrival: '2026-11-12' });
  });

  test('a later date sets the departure', () => {
    expect(nextRange({ arrival: '2026-11-12' }, '2026-11-14')).toEqual({ arrival: '2026-11-12', departure: '2026-11-14' });
  });

  test('a date on or before the arrival restarts the selection', () => {
    expect(nextRange({ arrival: '2026-11-12' }, '2026-11-12')).toEqual({ arrival: '2026-11-12' });
    expect(nextRange({ arrival: '2026-11-12' }, '2026-11-10')).toEqual({ arrival: '2026-11-10' });
  });

  test('a click after a complete range starts a new one', () => {
    expect(nextRange({ arrival: '2026-11-12', departure: '2026-11-14' }, '2026-11-20')).toEqual({ arrival: '2026-11-20' });
  });
});

describe('date helpers', () => {
  test('addDays crosses months and years', () => {
    expect(addDays('2026-12-31', 1)).toBe('2027-01-01');
    expect(addDays('2026-03-01', -1)).toBe('2026-02-28');
  });

  test('nights counts the nights between two dates', () => {
    expect(nights('2026-11-12', '2026-11-14')).toBe(2);
    expect(nights('2026-03-28', '2026-03-30')).toBe(2);
  });

  test('shiftMonth moves across years', () => {
    expect(shiftMonth({ year: 2026, month: 11 }, 1)).toEqual({ year: 2027, month: 0 });
    expect(shiftMonth({ year: 2026, month: 0 }, -1)).toEqual({ year: 2025, month: 11 });
  });
});
