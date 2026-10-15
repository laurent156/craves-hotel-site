import { describe, expect, test } from 'vitest';
import { buildRedirects } from './redirects';

describe('buildRedirects', () => {
  const lines = buildRedirects();

  test('sends the old French and Dutch pages to their translated URLs', () => {
    expect(lines).toContain('/fr/our-rooms/ /fr/chambres/ 301');
    expect(lines).toContain('/nl/story/ /nl/ons-verhaal/ 301');
    expect(lines).toContain('/fr/author/thecravehotel /fr/ 301');
  });

  test('skips English URLs that keep the same address', () => {
    expect(lines.some((l) => l.startsWith('/our-rooms/ '))).toBe(false);
    expect(lines.some((l) => l.startsWith('/faq/ '))).toBe(false);
  });

  test('keeps the manager contact page at its old address, in every language', () => {
    expect(lines.some((l) => l.includes('contact-manager'))).toBe(false);
  });

  test('never redirects a URL to itself', () => {
    for (const line of lines) {
      const [from, to] = line.split(' ');
      expect(from).not.toBe(to);
    }
  });
});
