import { describe, expect, test } from 'vitest';
import worker from './index';

const call = (path: string, method: string) =>
  worker.fetch(new Request(`https://craves-hotel.com${path}`, { method }), {});

describe('worker routing', () => {
  test('refuses anything but POST on the form endpoint', async () => {
    expect((await call('/api/contact', 'GET')).status).toBe(405);
  });

  test('sends POST on the form endpoint to the form handler', async () => {
    // Empty body: the handler answers 400 (not JSON), proving it was reached.
    expect((await call('/api/contact', 'POST')).status).toBe(400);
  });

  test('answers 404 on any other path it receives', async () => {
    expect((await call('/api/unknown', 'GET')).status).toBe(404);
  });
});
