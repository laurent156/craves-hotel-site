import type { Locale } from '../i18n/locales';

/**
 * Page content per language. French is the source and is always present;
 * English and Dutch fall back to French until they are translated (step 5).
 */
export type Localized<T> = { fr: T } & Partial<Record<Exclude<Locale, 'fr'>, T>>;

export function pick<T>(content: Localized<T>, locale: Locale): T {
  return content[locale] ?? content.fr;
}

/** A title with an optional italic part, as in the design: "Questions *fréquentes*". */
export interface TitleParts {
  text: string;
  em?: string;
  /** Text after the italic part, if any. */
  after?: string;
}

export interface FaqItem {
  q: string;
  a: string;
}
