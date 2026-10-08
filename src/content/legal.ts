import type { Localized, TitleParts } from './localize';

// Privacy, cookies and legal notice. Items in [brackets] are still to be supplied by the hotel.

export type LegalKey = 'privacy' | 'cookies' | 'legal';

interface LegalSection {
  title: string;
  text?: string;
  list?: string[];
  /** Key / value rows (legal notice). */
  rows?: { k: string; v: string }[];
  /** Cookie table rows. */
  cookies?: { name: string; service: string; purpose: string; duration: string }[];
}

export interface LegalPage {
  metaTitle: string;
  metaDescription: string;
  title: TitleParts;
  updated: string;
  intro?: string;
  sections: LegalSection[];
  note?: string;
}

export interface LegalContent {
  sectionLabel: string;
  navLabel: string;
  bookingTerms: string;
  cookieHeaders: [string, string, string, string];
  pages: Record<LegalKey, LegalPage>;
}

export const LEGAL: Localized<LegalContent> = {
  fr: {
    sectionLabel: 'Informations légales',
    navLabel: 'Pages légales',
    bookingTerms: 'Conditions de réservation',
    cookieHeaders: ['Cookie', 'Service', 'Finalité', 'Durée'],
    pages: {
      privacy: {
        metaTitle: 'Politique de confidentialité | Craves Hotel',
        metaDescription: 'Comment le Craves Hotel collecte, utilise et protège vos données personnelles, conformément au RGPD.',
        title: { text: 'Politique', em: 'de confidentialité' },
        updated: 'Dernière mise à jour : [date de la nouvelle version]',
        intro: 'La présente politique explique comment Craves Hotel collecte, utilise et protège vos informations personnelles, conformément au RGPD et aux lois belges en matière de protection des données.',
        sections: [
          { title: '1. Qui nous sommes', text: 'Craves Hotel est un boutique hôtel situé au cœur de Bruxelles. Pour toute question relative à la confidentialité : info@craves-hotel.com, Rue du Marché aux Poulets 32, 1000 Bruxelles.' },
          {
            title: '2. Les données que nous collectons',
            list: [
              'Identification : nom, e-mail, téléphone, adresse, nationalité, numéro de carte d’identité ou de passeport (si requis légalement lors du check-in)',
              'Réservation : dates de séjour, type de chambre, préférences, demandes particulières',
              'Paiement : données de carte bancaire, traitées de manière sécurisée par des prestataires tiers',
              'Historique client : séjours passés, préférences',
              'Préférences marketing : abonnement aux newsletters ou offres',
              'Utilisation du site : adresse IP, type de navigateur, pages consultées, cookies',
            ],
          },
          {
            title: '3. Comment nous utilisons vos données',
            list: [
              'Confirmer, gérer et assurer votre réservation et votre séjour',
              'Respecter nos obligations légales (ex. enregistrement des clients auprès de la police si requis)',
              'Communiquer avec vous au sujet de votre réservation',
              'Traiter les paiements et émettre les factures',
              'Personnaliser votre expérience et améliorer nos services',
              'Envoyer des newsletters ou offres, uniquement si vous y avez consenti',
              'Assurer le bon fonctionnement et la sécurité du site',
            ],
          },
          {
            title: '4. Base légale du traitement',
            list: [
              'Nécessité contractuelle : gérer les réservations et fournir l’hébergement',
              'Obligations légales : comptabilité, enregistrement des clients',
              'Consentement : newsletters et communications marketing',
              'Intérêt légitime : amélioration des services, prévention de la fraude, relation client',
            ],
          },
          {
            title: '5. Durée de conservation',
            list: [
              'Données de réservation et de facturation : 7 ans, conformément à la législation belge',
              'Abonnements marketing : jusqu’à votre désinscription',
              'Cookies : voir la page Cookies',
              'Pièce d’identité : uniquement pour la durée requise par la loi',
            ],
          },
          {
            title: '6. Partage de vos données',
            text: 'Nous ne vendons pas vos données. Nous pouvons les partager avec :',
            list: [
              'Les plateformes de réservation, si vous en avez utilisé une (ex. Booking.com, Expedia)',
              'Les prestataires de paiement',
              'Nos prestataires informatiques : moteur de réservation (Lighthouse), hébergement du site (Cloudflare), envoi d’e-mails (Brevo) [liste à confirmer]',
              'Les autorités compétentes si la loi l’exige (police, administration fiscale)',
            ],
          },
          { title: '7. Vos droits', text: 'Vous pouvez à tout moment accéder à vos données, les corriger, demander leur suppression (sauf obligation légale de conservation), retirer votre consentement au marketing, vous opposer à certains traitements et demander leur portabilité. Écrivez-nous à info@craves-hotel.com. Vous pouvez aussi introduire une réclamation auprès de l’Autorité de protection des données (dataprotectionauthority.be).' },
          { title: '8. Cookies', text: 'Notre site utilise des cookies pour son fonctionnement, la mesure d’audience et, avec votre accord, la publicité personnalisée. Le détail et vos choix sont sur la page Cookies.' },
          { title: '9. Sécurité', text: 'Nous mettons en place des mesures techniques et organisationnelles appropriées pour protéger vos données contre l’accès non autorisé, la perte ou l’utilisation abusive.' },
          { title: '10. Modifications', text: 'Nous pouvons mettre à jour cette politique. La version la plus récente est toujours disponible sur cette page.' },
        ],
      },
      cookies: {
        metaTitle: 'Politique cookies | Craves Hotel',
        metaDescription: 'Les cookies utilisés sur le site du Craves Hotel, leur finalité et comment gérer vos choix.',
        title: { text: 'Politique', em: 'cookies' },
        updated: 'Dernière mise à jour : [date de la nouvelle version]',
        intro: 'Un cookie est un petit fichier déposé sur votre appareil. Seuls les cookies strictement nécessaires sont déposés sans votre accord ; vous pouvez modifier vos choix à tout moment.',
        sections: [
          {
            title: 'Cookies strictement nécessaires',
            text: 'Indispensables au fonctionnement du site et à la mémorisation de vos choix de cookies. Ils ne nécessitent pas votre consentement.',
            cookies: [
              { name: '[cookie de consentement]', service: '[outil de consentement]', purpose: 'Mémoriser vos choix', duration: '[durée]' },
              { name: '[cookies du module]', service: 'Lighthouse', purpose: 'Fonctionnement de la réservation', duration: '[durée]' },
            ],
          },
          {
            title: 'Mesure d’audience',
            text: 'Nous aident à comprendre comment le site est utilisé, pour l’améliorer. Déposés uniquement avec votre accord.',
            cookies: [{ name: '_ga, _ga_HC9FCQ082S', service: 'Google Analytics', purpose: 'Statistiques de visite', duration: '[durée]' }],
          },
          {
            title: 'Marketing et publicité',
            text: 'Permettent de vous proposer des publicités pertinentes et de mesurer nos campagnes. Déposés uniquement avec votre accord.',
            cookies: [
              { name: '_gcl_au', service: 'Google Ads', purpose: 'Mesure des conversions', duration: '[durée]' },
              { name: '_fbp', service: 'Meta (Facebook, Instagram)', purpose: 'Publicité et reciblage', duration: '[durée]' },
              { name: 'sjrn_ccid', service: 'Sojern', purpose: 'Publicité voyage et reciblage', duration: '[durée]' },
              { name: 'sib_cuid', service: 'Brevo', purpose: 'Suivi des e-mails et automatisation marketing', duration: '[durée]' },
            ],
          },
        ],
        note: 'Cette liste sera générée automatiquement par l’outil de consentement, avec les durées exactes.',
      },
      legal: {
        metaTitle: 'Mentions légales | Craves Hotel',
        metaDescription: 'Mentions légales du site du Craves Hotel, rue du Marché aux Poulets 32, 1000 Bruxelles.',
        title: { text: 'Mentions', em: 'légales' },
        updated: 'Dernière mise à jour : [date de la nouvelle version]',
        sections: [
          {
            title: 'Éditeur du site',
            rows: [
              { k: 'Raison sociale', v: '[à fournir]' },
              { k: 'Forme juridique', v: '[à fournir]' },
              { k: 'Siège', v: 'Rue du Marché aux Poulets 32, 1000 Bruxelles, Belgique [à confirmer]' },
              { k: 'N° d’entreprise / TVA', v: 'BE 0450 505 612' },
              { k: 'Contact', v: 'info@craves-hotel.com · +32 2 219 04 40' },
              { k: 'Responsable de la publication', v: '[à fournir]' },
            ],
          },
          { title: 'Hébergement', rows: [{ k: 'Hébergeur', v: 'Cloudflare, Inc. · 101 Townsend St, San Francisco, CA 94107, États-Unis' }] },
          {
            title: 'Réservations',
            rows: [
              { k: 'Moteur de réservation', v: 'Lighthouse' },
              { k: 'Conditions de réservation', v: 'Consultables dans le module de réservation' },
            ],
          },
          {
            title: 'Propriété intellectuelle',
            rows: [
              { k: 'Contenus', v: 'Textes, photos, logo et marque Craves : reproduction interdite sans autorisation écrite.' },
              { k: 'Crédits photos', v: '[à fournir]' },
              { k: 'Design intérieur', v: 'Saar Zafrir Design' },
              { k: 'Conception du site', v: '26lights' },
            ],
          },
          {
            title: 'Responsabilité',
            rows: [
              { k: 'Informations', v: 'Nous veillons à l’exactitude des informations publiées (horaires, distances, services), qui peuvent évoluer.' },
              { k: 'Liens externes', v: 'Les sites de Le Conteur, Scène et de nos partenaires relèvent de leurs éditeurs respectifs.' },
            ],
          },
          { title: 'Droit applicable', rows: [{ k: 'Droit', v: 'Droit belge · tribunaux de Bruxelles [à valider]' }] },
        ],
      },
    },
  },
};
