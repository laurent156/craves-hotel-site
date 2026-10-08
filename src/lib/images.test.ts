import { describe, expect, test } from 'vitest';
import { photo } from './images';

describe('photo', () => {
  test('returns the image module for a known file name', () => {
    expect(photo('chambre-simple-craves-bruxelles')).toBeDefined();
  });

  test('fails loudly when the file does not exist, so a typo breaks the build', () => {
    expect(() => photo('chambre-inexistante')).toThrow(/chambre-inexistante/);
  });
});
