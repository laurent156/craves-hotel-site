// Cloudflare Worker of the site. The pages are static files served by Cloudflare (wrangler.jsonc, "assets");
// the worker only runs for /api/* and handles the form endpoint.
import { methodNotAllowed, onRequestPost, type Env } from './contact';

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const { pathname } = new URL(request.url);
    if (pathname === '/api/contact') {
      return request.method === 'POST' ? onRequestPost({ request, env }) : methodNotAllowed();
    }
    return new Response('Not found', { status: 404 });
  },
};
