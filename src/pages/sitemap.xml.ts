import type { APIRoute } from 'astro';
import { buildSitemap } from '../lib/sitemap';
import { PAGES } from '../views/registry';
import type { RouteKey } from '../i18n/routes';

const BUILD_DATE = new Date().toISOString().slice(0, 10);

export const GET: APIRoute = ({ site }) =>
  new Response(buildSitemap(site!.href, Object.keys(PAGES) as RouteKey[], BUILD_DATE), {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
