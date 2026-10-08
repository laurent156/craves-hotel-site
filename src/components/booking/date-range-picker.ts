// Range calendar for the booking forms (progressive enhancement of the native date inputs).
// Desktop: two months under the fields. Phones: one month in a bottom sheet.
import { addDays, monthGrid, nextRange, nights, shiftMonth, type IsoDate, type Range, type YearMonth } from '../../lib/calendar';

export interface PickerStrings {
  title: string;
  choose: string;
  night: string;
  nights: string;
  prev: string;
  next: string;
  done: string;
  close: string;
}

interface PickerOptions {
  root: HTMLElement;
  arrivalInput: HTMLInputElement;
  departureInput: HTMLInputElement;
  arrivalButton: HTMLButtonElement;
  departureButton: HTMLButtonElement;
  locale: string;
  strings: PickerStrings;
}

const PHONE = window.matchMedia('(max-width: 640px)');
const pad = (n: number) => String(n).padStart(2, '0');
const todayIso = () => {
  const d = new Date();
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
};
const toDate = (iso: IsoDate) => {
  const [y, m, d] = iso.split('-').map(Number);
  return new Date(y, m - 1, d);
};
const toYearMonth = (iso: IsoDate): YearMonth => {
  const [y, m] = iso.split('-').map(Number);
  return { year: y, month: m - 1 };
};

export function createDateRangePicker(options: PickerOptions): { open: () => void } {
  const { root, arrivalInput, departureInput, arrivalButton, departureButton, locale, strings } = options;
  const fmtShort = new Intl.DateTimeFormat(locale, { weekday: 'short', day: 'numeric', month: 'short' });
  const fmtLong = new Intl.DateTimeFormat(locale, { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  const fmtMonth = new Intl.DateTimeFormat(locale, { month: 'long', year: 'numeric' });
  const weekdays = Array.from({ length: 7 }, (_, i) =>
    new Intl.DateTimeFormat(locale, { weekday: 'narrow' }).format(new Date(2026, 10, 2 + i)),
  );

  const min = todayIso();
  let range: Range = { arrival: arrivalInput.value || undefined, departure: departureInput.value || undefined };
  let view: YearMonth = toYearMonth(range.arrival ?? min);
  let opener: HTMLButtonElement = arrivalButton;
  let hovered: IsoDate | undefined;

  const panel = document.createElement('div');
  panel.className = 'cal';
  panel.setAttribute('role', 'dialog');
  panel.setAttribute('aria-modal', 'false');
  panel.setAttribute('aria-label', strings.title);
  panel.hidden = true;
  const backdrop = document.createElement('div');
  backdrop.className = 'cal-backdrop';
  backdrop.hidden = true;
  root.append(panel);
  document.body.append(backdrop);

  const monthsShown = () => (PHONE.matches ? 1 : 2);
  const nightsLabel = (n: number) => (n === 1 ? strings.night : strings.nights).replace('{n}', String(n));

  function syncFields(): void {
    arrivalInput.value = range.arrival ?? '';
    departureInput.value = range.departure ?? '';
    arrivalButton.textContent = range.arrival ? fmtShort.format(toDate(range.arrival)) : strings.choose;
    departureButton.textContent = range.departure ? fmtShort.format(toDate(range.departure)) : strings.choose;
    arrivalButton.classList.toggle('is-empty', !range.arrival);
    departureButton.classList.toggle('is-empty', !range.departure);
  }

  function dayClass(iso: IsoDate): string {
    const end = range.departure ?? (range.arrival && hovered && hovered > range.arrival ? hovered : undefined);
    const classes = ['cal__day'];
    if (iso === range.arrival) classes.push(end ? 'is-start' : 'is-start is-alone');
    if (iso === range.departure) classes.push('is-end');
    if (range.arrival && end && iso > range.arrival && iso < end) classes.push('is-between');
    if (!range.departure && iso === end) classes.push('is-preview-end');
    if (iso === min) classes.push('is-today');
    return classes.join(' ');
  }

  function renderMonth(ym: YearMonth): string {
    const weeks = monthGrid(ym.year, ym.month);
    const head = weekdays.map((d) => `<span aria-hidden="true">${d}</span>`).join('');
    const cells = weeks
      .flat()
      .map((iso) => {
        if (!iso) return '<span></span>';
        const disabled = iso < min;
        const selected = iso === range.arrival || iso === range.departure;
        return `<button type="button" class="${dayClass(iso)}" data-date="${iso}" aria-label="${fmtLong.format(toDate(iso))}"${
          selected ? ' aria-pressed="true"' : ''
        }${disabled ? ' disabled' : ''} tabindex="-1">${Number(iso.slice(8))}</button>`;
      })
      .join('');
    return `<div class="cal__month"><p class="cal__caption">${fmtMonth.format(new Date(ym.year, ym.month, 1))}</p><div class="cal__weekdays">${head}</div><div class="cal__grid">${cells}</div></div>`;
  }

  function render(focusDate?: IsoDate, preventScroll = false): void {
    const months = Array.from({ length: monthsShown() }, (_, i) => shiftMonth(view, i));
    const canGoBack = shiftMonth(view, -1).year * 12 + shiftMonth(view, -1).month >= toYearMonth(min).year * 12 + toYearMonth(min).month;
    const summary =
      range.arrival && range.departure
        ? `${fmtShort.format(toDate(range.arrival))} → ${fmtShort.format(toDate(range.departure))} · ${nightsLabel(nights(range.arrival, range.departure))}`
        : '';
    panel.innerHTML = `
      <div class="cal__head">
        <p class="cal__title">${strings.title}</p>
        <button type="button" class="cal__close" data-cal-close aria-label="${strings.close}">✕</button>
      </div>
      <div class="cal__body">
        <button type="button" class="cal__nav cal__nav--prev" data-cal-prev aria-label="${strings.prev}"${canGoBack ? '' : ' disabled'}>‹</button>
        <div class="cal__months">${months.map(renderMonth).join('')}</div>
        <button type="button" class="cal__nav cal__nav--next" data-cal-next aria-label="${strings.next}">›</button>
      </div>
      <div class="cal__foot">
        <p class="cal__summary" aria-live="polite">${summary}</p>
        <button type="button" class="pill pill--dark cal__done" data-cal-close>${strings.done}</button>
      </div>`;
    const target =
      panel.querySelector<HTMLButtonElement>(`[data-date="${focusDate}"]:not([disabled])`) ??
      panel.querySelector<HTMLButtonElement>(`[data-date="${range.departure ?? range.arrival}"]:not([disabled])`) ??
      panel.querySelector<HTMLButtonElement>('[data-date]:not([disabled])');
    if (target) target.tabIndex = 0;
    if (focusDate && target) target.focus({ preventScroll });
  }

  function place(): void {
    if (PHONE.matches) return;
    panel.classList.remove('cal--up');
    const rect = root.getBoundingClientRect();
    const spaceBelow = window.innerHeight - rect.bottom;
    if (spaceBelow < panel.offsetHeight + 16 && rect.top > spaceBelow) panel.classList.add('cal--up');
  }

  function open(from: HTMLButtonElement = arrivalButton): void {
    opener = from;
    view = toYearMonth(range.arrival ?? min);
    panel.hidden = false;
    backdrop.hidden = !PHONE.matches;
    render();
    place();
    // Focus only once the panel is placed, without scrolling the page under it.
    render(range.arrival ?? min, true);
    document.addEventListener('pointerdown', onOutside);
  }

  function close(): void {
    if (panel.hidden) return;
    panel.hidden = true;
    backdrop.hidden = true;
    hovered = undefined;
    document.removeEventListener('pointerdown', onOutside);
    opener.focus();
  }

  function onOutside(event: PointerEvent): void {
    const target = event.target as Node;
    if (!panel.contains(target) && target !== arrivalButton && target !== departureButton) close();
  }

  panel.addEventListener('click', (event) => {
    const el = (event.target as HTMLElement).closest<HTMLElement>('button');
    if (!el) return;
    if (el.hasAttribute('data-cal-close')) return close();
    if (el.hasAttribute('data-cal-prev')) {
      view = shiftMonth(view, -1);
      return render();
    }
    if (el.hasAttribute('data-cal-next')) {
      view = shiftMonth(view, 1);
      return render();
    }
    const date = el.dataset.date;
    if (!date) return;
    range = nextRange(range, date);
    syncFields();
    render(date);
    if (range.departure) window.setTimeout(close, 250);
  });

  panel.addEventListener('pointerover', (event) => {
    const date = (event.target as HTMLElement).closest<HTMLElement>('[data-date]')?.dataset.date;
    if (!range.arrival || range.departure || date === hovered) return;
    hovered = date;
    panel.querySelectorAll<HTMLElement>('[data-date]').forEach((b) => (b.className = dayClass(b.dataset.date!)));
  });

  panel.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') return close();
    const current = (event.target as HTMLElement).dataset.date;
    const step = { ArrowLeft: -1, ArrowRight: 1, ArrowUp: -7, ArrowDown: 7 }[event.key];
    if (!current || !step) return;
    event.preventDefault();
    const next = addDays(current, step);
    if (next < min) return;
    const nextYm = toYearMonth(next);
    const last = shiftMonth(view, monthsShown() - 1);
    const index = (ym: YearMonth) => ym.year * 12 + ym.month;
    if (index(nextYm) < index(view)) view = nextYm;
    if (index(nextYm) > index(last)) view = shiftMonth(nextYm, -(monthsShown() - 1));
    render(next);
  });

  backdrop.addEventListener('click', close);
  arrivalButton.addEventListener('click', () => (panel.hidden ? open(arrivalButton) : close()));
  departureButton.addEventListener('click', () => (panel.hidden ? open(departureButton) : close()));
  PHONE.addEventListener('change', () => {
    if (!panel.hidden) open(opener);
  });

  syncFields();
  return { open };
}
