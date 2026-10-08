// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
// Production by default. Preview builds (GitHub Pages) set SITE_URL and BASE_PATH.
export default defineConfig({
  site: process.env.SITE_URL ?? 'https://craves-hotel.com',
  base: process.env.BASE_PATH ?? '/',
  trailingSlash: 'always',
  i18n: {
    locales: ['en', 'fr', 'nl'],
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: false },
  },
  // Self-hosted at build time: no request to Google Fonts from the visitor's browser (GDPR).
  fonts: [
    {
      name: 'Instrument Serif',
      cssVariable: '--font-serif',
      provider: fontProviders.google(),
      weights: [400],
      styles: ['normal', 'italic'],
      subsets: ['latin'],
      fallbacks: ['Georgia', 'serif'],
    },
    {
      name: 'Mona Sans',
      cssVariable: '--font-sans',
      provider: fontProviders.google(),
      weights: [300, 400, 500, 600],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['sans-serif'],
    },
  ],
});
