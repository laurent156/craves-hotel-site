import type { Locale } from '../i18n/locales';

// Cookie banner and preferences texts. Categories match the cookie policy page.
export interface ConsentTexts {
  banner: { title: string; description: string; acceptAll: string; rejectAll: string; preferences: string };
  preferences: {
    title: string;
    acceptAll: string;
    rejectAll: string;
    save: string;
    close: string;
    intro: string;
    necessary: { title: string; description: string };
    analytics: { title: string; description: string };
    marketing: { title: string; description: string };
    more: string;
  };
  manage: string;
}

export const CONSENT: Record<Locale, ConsentTexts> = {
  fr: {
    banner: {
      title: 'Vos cookies, votre choix',
      description:
        'Nous utilisons des cookies pour mesurer l’audience du site et, avec votre accord, vous proposer des publicités pertinentes. Vous pouvez tout accepter, tout refuser ou choisir.',
      acceptAll: 'Tout accepter',
      rejectAll: 'Tout refuser',
      preferences: 'Personnaliser',
    },
    preferences: {
      title: 'Préférences cookies',
      acceptAll: 'Tout accepter',
      rejectAll: 'Tout refuser',
      save: 'Enregistrer mes choix',
      close: 'Fermer',
      intro: 'Choisissez les cookies que vous acceptez. Vous pouvez changer d’avis à tout moment via le lien « Gérer les cookies » en bas de chaque page.',
      necessary: {
        title: 'Strictement nécessaires',
        description: 'Indispensables au fonctionnement du site, de la réservation et à la mémorisation de vos choix. Toujours actifs.',
      },
      analytics: {
        title: 'Mesure d’audience',
        description: 'Statistiques de visite anonymisées (Google Analytics), pour améliorer le site.',
      },
      marketing: {
        title: 'Marketing et publicité',
        description: 'Publicités pertinentes et mesure de nos campagnes (Google Ads, Meta, Sojern, Brevo).',
      },
      more: 'Le détail des cookies est sur notre page',
    },
    manage: 'Gérer les cookies',
  },
  en: {
    banner: {
      title: 'Your cookies, your choice',
      description:
        'We use cookies to measure site traffic and, with your consent, to show you relevant ads. You can accept all, reject all or choose.',
      acceptAll: 'Accept all',
      rejectAll: 'Reject all',
      preferences: 'Customise',
    },
    preferences: {
      title: 'Cookie preferences',
      acceptAll: 'Accept all',
      rejectAll: 'Reject all',
      save: 'Save my choices',
      close: 'Close',
      intro: 'Choose which cookies you accept. You can change your mind at any time with the “Manage cookies” link at the bottom of every page.',
      necessary: {
        title: 'Strictly necessary',
        description: 'Required for the site and booking to work and to remember your choices. Always on.',
      },
      analytics: {
        title: 'Analytics',
        description: 'Anonymised visit statistics (Google Analytics), to improve the site.',
      },
      marketing: {
        title: 'Marketing and advertising',
        description: 'Relevant ads and measurement of our campaigns (Google Ads, Meta, Sojern, Brevo).',
      },
      more: 'Details of every cookie are on our',
    },
    manage: 'Manage cookies',
  },
  nl: {
    banner: {
      title: 'Uw cookies, uw keuze',
      description:
        'We gebruiken cookies om het websitebezoek te meten en, met uw toestemming, relevante advertenties te tonen. U kunt alles accepteren, alles weigeren of zelf kiezen.',
      acceptAll: 'Alles accepteren',
      rejectAll: 'Alles weigeren',
      preferences: 'Aanpassen',
    },
    preferences: {
      title: 'Cookievoorkeuren',
      acceptAll: 'Alles accepteren',
      rejectAll: 'Alles weigeren',
      save: 'Mijn keuze opslaan',
      close: 'Sluiten',
      intro: 'Kies welke cookies u accepteert. U kunt uw keuze altijd wijzigen via de link “Cookies beheren” onderaan elke pagina.',
      necessary: {
        title: 'Strikt noodzakelijk',
        description: 'Nodig voor de werking van de website en de reservatie, en om uw keuze te onthouden. Altijd actief.',
      },
      analytics: {
        title: 'Statistieken',
        description: 'Geanonimiseerde bezoekstatistieken (Google Analytics), om de website te verbeteren.',
      },
      marketing: {
        title: 'Marketing en advertenties',
        description: 'Relevante advertenties en meting van onze campagnes (Google Ads, Meta, Sojern, Brevo).',
      },
      more: 'Alle cookies staan op onze',
    },
    manage: 'Cookies beheren',
  },
};
