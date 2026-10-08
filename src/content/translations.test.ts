import { describe, expect, test } from 'vitest';
import { HOME } from './home';
import { ROOMS, ROOM_POLICIES } from './rooms';
import { ROOMS_PAGE } from './roomsPage';
import { VENUES } from './venues';
import { LOCATION } from './location';
import { FAQ } from './faq';
import { CONTACT_PAGE, FAQ_PAGE } from './infoPages';
import { CRAVES } from './craves';
import { GUIDE_ARTICLES, GUIDE_INDEX } from './guide';
import { LEGAL } from './legal';
import type { Localized } from './localize';

// Fields that are identifiers, not text: they must be identical in every language.
const ID_KEYS = new Set(['photo', 'photos', 'heroPhoto', 'route', 'link', 'ids', 'id', 'schemaType', 'key']);
// Links may point to the visitor's language on the same site (le-conteur.com/fr → /en): compare the site only.
const LINK_KEYS = new Set(['href', 'url']);
const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;

/** Shape of a value: structure, numbers and identifiers kept, translatable text replaced by "text". */
function shape(value: unknown, key = ''): unknown {
  if (ID_KEYS.has(key)) return value;
  if (LINK_KEYS.has(key) && typeof value === 'string') return value.startsWith('mailto:') ? value : new URL(value).origin;
  if (typeof value === 'string' && ISO_DATE.test(value)) return value;
  if (Array.isArray(value)) return value.map((v) => shape(v));
  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value as Record<string, unknown>)
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([k, v]) => [k, shape(v, k)]),
    );
  }
  if (typeof value === 'string') return value.trim().length > 0 ? 'text' : 'EMPTY';
  return value;
}

const CONTENT: Record<string, Localized<unknown>> = {
  HOME,
  ROOM_POLICIES,
  ROOMS_PAGE,
  'VENUES.conteur': VENUES.conteur,
  'VENUES.scene': VENUES.scene,
  LOCATION,
  FAQ,
  FAQ_PAGE,
  CONTACT_PAGE,
  CRAVES,
  GUIDE_INDEX,
  LEGAL,
  ...Object.fromEntries(ROOMS.map((r) => [`ROOMS.${r.key}`, r.text])),
  ...Object.fromEntries(GUIDE_ARTICLES.map((a, i) => [`GUIDE_ARTICLES[${i}]`, a])),
};

describe('translations', () => {
  for (const [name, content] of Object.entries(CONTENT)) {
    test(`${name} exists in English and Dutch with the same structure as French`, () => {
      expect(content.en, `${name}.en missing`).toBeDefined();
      expect(content.nl, `${name}.nl missing`).toBeDefined();
      expect(shape(content.en)).toEqual(shape(content.fr));
      expect(shape(content.nl)).toEqual(shape(content.fr));
    });
  }

  test('no translated text uses the forbidden words', () => {
    const all = JSON.stringify(Object.values(CONTENT).map((c) => [c.en, c.nl])).toLowerCase();
    for (const word of ['boudoir', 'earplug', 'oordop', 'craves card', 'craves-kaart', 'kaart van craves']) {
      expect(all).not.toContain(word);
    }
  });
});
