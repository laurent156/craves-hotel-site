// Where the forms are posted: the Cloudflare worker (worker/contact.ts), under the site's base path.
export const FORM_ENDPOINT = `${import.meta.env.BASE_URL.replace(/\/$/, '')}/api/contact`;
