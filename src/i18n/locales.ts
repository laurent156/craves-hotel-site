// English stays at the root, as on the current site (/, /fr/, /nl/), so existing URLs keep their ranking.
export const LOCALES = ['en', 'fr', 'nl'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'en';

export const HREFLANG: Record<Locale, string> = {
  en: 'en',
  fr: 'fr',
  nl: 'nl',
};

export function isLocale(value: string | undefined): value is Locale {
  return LOCALES.includes(value as Locale);
}
