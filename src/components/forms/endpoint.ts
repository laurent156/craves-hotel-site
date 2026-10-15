// Where the forms are posted: the Cloudflare Pages function (functions/api/contact.ts), under the site's base path.
export const FORM_ENDPOINT = `${import.meta.env.BASE_URL.replace(/\/$/, '')}/api/contact`;
