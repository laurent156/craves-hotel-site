import { describe, expect, test } from 'vitest';
import { FAQ, faqItems } from './faq';

describe('faqItems', () => {
  test('returns the questions in the requested order', () => {
    const items = faqItems('fr', ['parking', 'direct']);

    expect(items.map((i) => i.q)).toEqual(['Où se garer ?', 'Est-ce moins cher de réserver sur le site de l’hôtel ?']);
  });

  test('throws on an unknown id so a typo breaks the build', () => {
    expect(() => faqItems('fr', ['nope'])).toThrow(/nope/);
  });

  test('returns the same questions in every language', () => {
    expect(faqItems('nl', ['pool', 'parking'])).toHaveLength(2);
    expect(faqItems('en', ['pool'])[0].q).not.toBe(faqItems('fr', ['pool'])[0].q);
  });
});

describe('FAQ', () => {
  test('question ids are unique across categories', () => {
    const ids = FAQ.fr.flatMap((c) => Object.keys(c.questions));
    expect(new Set(ids).size).toBe(ids.length);
  });
});
