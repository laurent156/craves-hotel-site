import { DEFAULT_LOCALE, LOCALES, type Locale } from './locales';

// Slug of every page in each language ('' = home). English keeps the current site's slugs
// (/our-rooms/, /story/, /press/…) so those URLs need no redirect.
export const ROUTES = {
  home: { en: '', fr: '', nl: '' },
  rooms: { en: 'our-rooms', fr: 'chambres', nl: 'kamers' },
  roomSingle: { en: 'our-rooms/single-room', fr: 'chambres/chambre-simple', nl: 'kamers/eenpersoonskamer' },
  roomDouble: { en: 'our-rooms/double-room', fr: 'chambres/chambre-double', nl: 'kamers/tweepersoonskamer' },
  roomTriple: { en: 'our-rooms/triple-room', fr: 'chambres/chambre-triple', nl: 'kamers/driepersoonskamer' },
  roomFamily: { en: 'our-rooms/family-room', fr: 'chambres/chambre-famille', nl: 'kamers/familiekamer' },
  conteur: { en: 'le-conteur', fr: 'le-conteur', nl: 'le-conteur' },
  scene: { en: 'scene', fr: 'scene', nl: 'scene' },
  location: { en: 'location', fr: 'localisation', nl: 'ligging' },
  story: { en: 'story', fr: 'notre-histoire', nl: 'ons-verhaal' },
  gallery: { en: 'gallery', fr: 'galerie', nl: 'galerij' },
  press: { en: 'press', fr: 'presse', nl: 'pers' },
  faq: { en: 'faq', fr: 'faq', nl: 'faq' },
  contact: { en: 'contact', fr: 'contact', nl: 'contact' },
  guide: { en: 'guide', fr: 'guide', nl: 'gids' },
  guideGrandPlace: {
    en: 'guide/things-to-do-near-grand-place-brussels',
    fr: 'guide/que-faire-autour-grand-place-bruxelles',
    nl: 'gids/wat-te-doen-rond-de-grote-markt-brussel',
  },
  privacy: { en: 'privacy-policy', fr: 'confidentialite', nl: 'privacybeleid' },
  cookies: { en: 'cookie-policy', fr: 'cookies', nl: 'cookiebeleid' },
  legal: { en: 'legal-notice', fr: 'mentions-legales', nl: 'juridische-informatie' },
} as const satisfies Record<string, Record<Locale, string>>;

export type RouteKey = keyof typeof ROUTES;

// Site served from a sub-folder on preview hosts (e.g. /craves-hotel-site/ on GitHub Pages); '' in production.
const BASE = (import.meta.env?.BASE_URL ?? '/').replace(/\/$/, '');

export function localizedPath(key: RouteKey, locale: Locale): string {
  const prefix = `${BASE}${locale === DEFAULT_LOCALE ? '' : `/${locale}`}`;
  const slug = ROUTES[key][locale];
  return slug ? `${prefix}/${slug}/` : `${prefix}/`;
}

export function alternatePaths(key: RouteKey): Record<Locale, string> {
  return Object.fromEntries(LOCALES.map((locale) => [locale, localizedPath(key, locale)])) as Record<
    Locale,
    string
  >;
}
