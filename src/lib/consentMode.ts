// Google Consent Mode v2 signals derived from the visitor's cookie choices.
export type ConsentCategory = 'necessary' | 'analytics' | 'marketing';
type Signal = 'granted' | 'denied';

export interface GoogleConsent {
  analytics_storage: Signal;
  ad_storage: Signal;
  ad_user_data: Signal;
  ad_personalization: Signal;
}

/** State before any choice: nothing is stored. Sent before Google Tag Manager loads. */
export const DEFAULT_CONSENT: GoogleConsent & Record<string, unknown> = {
  analytics_storage: 'denied',
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  functionality_storage: 'granted',
  security_storage: 'granted',
  wait_for_update: 500,
};

export function googleConsent(accepted: string[]): GoogleConsent {
  const signal = (on: boolean): Signal => (on ? 'granted' : 'denied');
  const marketing = accepted.includes('marketing');
  return {
    analytics_storage: signal(accepted.includes('analytics')),
    ad_storage: signal(marketing),
    ad_user_data: signal(marketing),
    ad_personalization: signal(marketing),
  };
}

/**
 * "Basic" Consent Mode: GTM (and every tag it holds: GA4, Google Ads, Meta, Sojern…) is only loaded
 * after an explicit yes. Safer than "advanced" mode while the container's tags are not all consent-aware.
 */
export function shouldLoadTags(accepted: string[]): boolean {
  return accepted.includes('analytics') || accepted.includes('marketing');
}
