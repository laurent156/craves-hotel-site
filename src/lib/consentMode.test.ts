import { describe, expect, test } from 'vitest';
import { DEFAULT_CONSENT, googleConsent, shouldLoadTags } from './consentMode';

describe('googleConsent', () => {
  test('denies everything by default (nothing stored before a choice)', () => {
    expect(DEFAULT_CONSENT).toMatchObject({
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      analytics_storage: 'denied',
    });
  });

  test('analytics only: measurement allowed, advertising still denied', () => {
    expect(googleConsent(['necessary', 'analytics'])).toEqual({
      analytics_storage: 'granted',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
    });
  });

  test('marketing grants the three advertising signals', () => {
    expect(googleConsent(['necessary', 'marketing'])).toMatchObject({
      ad_storage: 'granted',
      ad_user_data: 'granted',
      ad_personalization: 'granted',
      analytics_storage: 'denied',
    });
  });
});

describe('shouldLoadTags', () => {
  test('loads Google Tag Manager only once the visitor accepted analytics or marketing', () => {
    expect(shouldLoadTags(['necessary'])).toBe(false);
    expect(shouldLoadTags(['necessary', 'analytics'])).toBe(true);
    expect(shouldLoadTags(['necessary', 'marketing'])).toBe(true);
  });
});
