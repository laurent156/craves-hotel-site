import { describe, expect, test } from 'vitest';
import { buildSitemap } from './sitemap';

const SITE = 'https://craves-hotel.com';

describe('buildSitemap', () => {
  const xml = buildSitemap(SITE, ['home', 'rooms'], '2026-10-08');

  test('lists every page in every language', () => {
    for (const loc of ['/', '/fr/', '/nl/', '/our-rooms/', '/fr/chambres/', '/nl/kamers/']) {
      expect(xml).toContain(`<loc>${SITE}${loc}</loc>`);
    }
  });

  test('links each page to its translations, with an x-default', () => {
    expect(xml).toContain(`<xhtml:link rel="alternate" hreflang="fr" href="${SITE}/fr/chambres/"/>`);
    expect(xml).toContain(`<xhtml:link rel="alternate" hreflang="x-default" href="${SITE}/our-rooms/"/>`);
  });

  test('is a valid urlset with the xhtml namespace and lastmod', () => {
    expect(xml.startsWith('<?xml version="1.0" encoding="UTF-8"?>')).toBe(true);
    expect(xml).toContain('xmlns:xhtml="http://www.w3.org/1999/xhtml"');
    expect(xml.match(/<url>/g)).toHaveLength(6);
    expect(xml).toContain('<lastmod>2026-10-08</lastmod>');
  });
});
