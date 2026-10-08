import { LOCALES, DEFAULT_LOCALE } from '../i18n/locales';
import { localizedPath, type RouteKey } from '../i18n/routes';

// Old WordPress URLs (same English slugs under /, /fr/ and /nl/) and the page that replaces them.
const OLD_SLUGS: Record<string, RouteKey> = {
  'our-rooms': 'rooms',
  story: 'story',
  press: 'press',
  gallery: 'gallery',
  faq: 'faq',
  'contact-manager': 'contact',
  'special-offer': 'home',
  'sample-page': 'home',
  '2022/04/hello-world': 'home',
  'category/uncategorized': 'home',
};

/** Lines of a Cloudflare Pages _redirects file (301), skipping URLs that did not change. */
export function buildRedirects(): string[] {
  return LOCALES.flatMap((locale) => {
    const prefix = locale === DEFAULT_LOCALE ? '' : `/${locale}`;
    return Object.entries(OLD_SLUGS)
      .map(([slug, route]) => [`${prefix}/${slug}/`, localizedPath(route, locale)] as const)
      .filter(([from, to]) => from !== to)
      .flatMap(([from, to]) => [`${from} ${to} 301`, `${from.replace(/\/$/, '')} ${to} 301`]);
  });
}
