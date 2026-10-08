import { describe, expect, test } from 'vitest';
import { richText } from './richText';

describe('richText', () => {
  test('splits **bold** markers into strong segments', () => {
    expect(richText('À **280 m** du Craves')).toEqual([
      { text: 'À ', strong: false },
      { text: '280 m', strong: true },
      { text: ' du Craves', strong: false },
    ]);
  });

  test('returns plain text untouched', () => {
    expect(richText('Entrée libre.')).toEqual([{ text: 'Entrée libre.', strong: false }]);
  });

  test('drops empty segments around markers', () => {
    expect(richText('**Gratuit**')).toEqual([{ text: 'Gratuit', strong: true }]);
  });
});
