import { describe, expect, test } from 'vitest';
import { LOCALES } from './locales';
import { ROUTES, alternatePaths, localizedPath, type RouteKey } from './routes';

describe('localizedPath', () => {
  test('keeps English at the root and prefixes French and Dutch', () => {
    expect(localizedPath('home', 'en')).toBe('/');
    expect(localizedPath('home', 'fr')).toBe('/fr/');
    expect(localizedPath('home', 'nl')).toBe('/nl/');
  });

  test('uses the translated slug of each language, with a trailing slash', () => {
    expect(localizedPath('rooms', 'en')).toBe('/our-rooms/');
    expect(localizedPath('rooms', 'fr')).toBe('/fr/chambres/');
    expect(localizedPath('rooms', 'nl')).toBe('/nl/kamers/');
    expect(localizedPath('roomDouble', 'fr')).toBe('/fr/chambres/chambre-double/');
  });
});

describe('alternatePaths', () => {
  test('lists the same page in every language', () => {
    expect(alternatePaths('faq')).toEqual({ en: '/faq/', fr: '/fr/faq/', nl: '/nl/faq/' });
  });
});

describe('ROUTES', () => {
  test('every page has a slug in every language', () => {
    for (const key of Object.keys(ROUTES) as RouteKey[]) {
      for (const locale of LOCALES) {
        expect(typeof ROUTES[key][locale]).toBe('string');
      }
    }
  });

  test('no two pages share a URL', () => {
    const paths = (Object.keys(ROUTES) as RouteKey[]).flatMap((key) =>
      LOCALES.map((locale) => localizedPath(key, locale)),
    );
    expect(new Set(paths).size).toBe(paths.length);
  });
});
