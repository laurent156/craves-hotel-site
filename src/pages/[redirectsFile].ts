import type { APIRoute, GetStaticPaths } from 'astro';
import { buildRedirects } from '../lib/redirects';

// Built as dist/_redirects, read by Cloudflare Pages. (Astro ignores page files starting with "_",
// hence the dynamic route.)
export const getStaticPaths = (() => [{ params: { redirectsFile: '_redirects' } }]) satisfies GetStaticPaths;

export const GET: APIRoute = () => new Response(`${buildRedirects().join('\n')}\n`, { headers: { 'Content-Type': 'text/plain' } });
