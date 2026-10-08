import { DEFAULT_LOCALE, HREFLANG, LOCALES } from '../i18n/locales';
import { alternatePaths, type RouteKey } from '../i18n/routes';

/** XML sitemap with hreflang alternates for each page (Google's recommended format for multilingual sites). */
export function buildSitemap(site: string, routes: RouteKey[], lastmod: string): string {
  const base = site.replace(/\/$/, '');
  const urls = routes.flatMap((route) => {
    const paths = alternatePaths(route);
    const links = [
      ...LOCALES.map((l) => `    <xhtml:link rel="alternate" hreflang="${HREFLANG[l]}" href="${base}${paths[l]}"/>`),
      `    <xhtml:link rel="alternate" hreflang="x-default" href="${base}${paths[DEFAULT_LOCALE]}"/>`,
    ].join('\n');
    return LOCALES.map(
      (l) => `  <url>\n    <loc>${base}${paths[l]}</loc>\n    <lastmod>${lastmod}</lastmod>\n${links}\n  </url>`,
    );
  });

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    ...urls,
    '</urlset>',
  ].join('\n');
}
