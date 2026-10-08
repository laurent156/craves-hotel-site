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
  en: {
    sectionLabel: 'Legal information',
    navLabel: 'Legal pages',
    bookingTerms: 'Booking conditions',
    cookieHeaders: ['Cookie', 'Service', 'Purpose', 'Duration'],
    pages: {
      privacy: {
        metaTitle: 'Privacy policy | Craves Hotel',
        metaDescription: 'How Craves Hotel collects, uses and protects your personal data, in accordance with the GDPR.',
        title: { text: 'Privacy', em: 'policy' },
        updated: 'Last updated: [date of the new version]',
        intro: 'This policy explains how Craves Hotel collects, uses and protects your personal information, in accordance with the GDPR and Belgian data protection law.',
        sections: [
          { title: '1. Who we are', text: 'Craves Hotel is a boutique hotel in the heart of Brussels. For any question relating to privacy: info@craves-hotel.com, Rue du Marché aux Poulets 32, 1000 Brussels.' },
          {
            title: '2. The data we collect',
            list: [
              'Identification: name, email address, phone number, address, nationality, identity card or passport number (where legally required at check-in)',
              'Booking: dates of stay, room type, preferences, special requests',
              'Payment: bank card details, processed securely by third-party providers',
              'Guest history: previous stays, preferences',
              'Marketing preferences: subscription to newsletters or offers',
              'Website use: IP address, browser type, pages viewed, cookies',
            ],
          },
          {
            title: '3. How we use your data',
            list: [
              'To confirm, manage and provide your booking and your stay',
              'To comply with our legal obligations (e.g. registering guests with the police where required)',
              'To communicate with you about your booking',
              'To process payments and issue invoices',
              'To personalise your experience and improve our services',
              'To send newsletters or offers, only if you have consented to this',
              'To ensure the proper functioning and security of the website',
            ],
          },
          {
            title: '4. Legal basis for processing',
            list: [
              'Contractual necessity: managing bookings and providing accommodation',
              'Legal obligations: accounting, guest registration',
              'Consent: newsletters and marketing communications',
              'Legitimate interest: improving our services, fraud prevention, customer relations',
            ],
          },
          {
            title: '5. Retention period',
            list: [
              'Booking and billing data: 7 years, in accordance with Belgian law',
              'Marketing subscriptions: until you unsubscribe',
              'Cookies: see the Cookie policy page',
              'Identity documents: only for as long as required by law',
            ],
          },
          {
            title: '6. Sharing your data',
            text: 'We do not sell your data. We may share it with:',
            list: [
              'Booking platforms, if you used one (e.g. Booking.com, Expedia)',
              'Payment service providers',
              'Our IT service providers: booking engine (Lighthouse), website hosting (Cloudflare), email delivery (Brevo) [list to be confirmed]',
              'The competent authorities where required by law (police, tax authorities)',
            ],
          },
          { title: '7. Your rights', text: 'You may at any time access your data, have it corrected, request its erasure (unless we are legally required to keep it), withdraw your consent to marketing, object to certain processing and request data portability. Write to us at info@craves-hotel.com. You may also lodge a complaint with the Belgian Data Protection Authority (dataprotectionauthority.be).' },
          { title: '8. Cookies', text: 'Our website uses cookies for its operation, for audience measurement and, with your consent, for personalised advertising. Details and your choices are on the Cookie policy page.' },
          { title: '9. Security', text: 'We implement appropriate technical and organisational measures to protect your data against unauthorised access, loss or misuse.' },
          { title: '10. Changes', text: 'We may update this policy. The most recent version is always available on this page.' },
        ],
      },
      cookies: {
        metaTitle: 'Cookie policy | Craves Hotel',
        metaDescription: 'The cookies used on the Craves Hotel website, their purpose and how to manage your choices.',
        title: { text: 'Cookie', em: 'policy' },
        updated: 'Last updated: [date of the new version]',
        intro: 'A cookie is a small file placed on your device. Only strictly necessary cookies are placed without your consent; you can change your choices at any time.',
        sections: [
          {
            title: 'Strictly necessary cookies',
            text: 'Essential for the website to work and to remember your cookie choices. They do not require your consent.',
            cookies: [
              { name: '[consent cookie]', service: '[consent tool]', purpose: 'Remembering your choices', duration: '[duration]' },
              { name: '[module cookies]', service: 'Lighthouse', purpose: 'Booking functionality', duration: '[duration]' },
            ],
          },
          {
            title: 'Audience measurement',
            text: 'Help us understand how the website is used, so we can improve it. Placed only with your consent.',
            cookies: [{ name: '_ga, _ga_HC9FCQ082S', service: 'Google Analytics', purpose: 'Visitor statistics', duration: '[duration]' }],
          },
          {
            title: 'Marketing and advertising',
            text: 'Allow us to show you relevant advertising and to measure our campaigns. Placed only with your consent.',
            cookies: [
              { name: '_gcl_au', service: 'Google Ads', purpose: 'Conversion tracking', duration: '[duration]' },
              { name: '_fbp', service: 'Meta (Facebook, Instagram)', purpose: 'Advertising and retargeting', duration: '[duration]' },
              { name: 'sjrn_ccid', service: 'Sojern', purpose: 'Travel advertising and retargeting', duration: '[duration]' },
              { name: 'sib_cuid', service: 'Brevo', purpose: 'Email tracking and marketing automation', duration: '[duration]' },
            ],
          },
        ],
        note: 'This list will be generated automatically by the consent tool, with the exact durations.',
      },
      legal: {
        metaTitle: 'Legal notice | Craves Hotel',
        metaDescription: 'Legal notice for the Craves Hotel website, Rue du Marché aux Poulets 32, 1000 Brussels.',
        title: { text: 'Legal', em: 'notice' },
        updated: 'Last updated: [date of the new version]',
        sections: [
          {
            title: 'Website publisher',
            rows: [
              { k: 'Company name', v: '[to be provided]' },
              { k: 'Legal form', v: '[to be provided]' },
              { k: 'Registered office', v: 'Rue du Marché aux Poulets 32, 1000 Brussels, Belgium [to be confirmed]' },
              { k: 'Company / VAT number', v: 'BE 0450 505 612' },
              { k: 'Contact', v: 'info@craves-hotel.com · +32 2 219 04 40' },
              { k: 'Publication manager', v: '[to be provided]' },
            ],
          },
          { title: 'Hosting', rows: [{ k: 'Hosting provider', v: 'Cloudflare, Inc. · 101 Townsend St, San Francisco, CA 94107, United States' }] },
          {
            title: 'Bookings',
            rows: [
              { k: 'Booking engine', v: 'Lighthouse' },
              { k: 'Booking conditions', v: 'Available in the booking module' },
            ],
          },
          {
            title: 'Intellectual property',
            rows: [
              { k: 'Content', v: 'Texts, photos, logo and the Craves brand: reproduction prohibited without written permission.' },
              { k: 'Photo credits', v: '[to be provided]' },
              { k: 'Interior design', v: 'Saar Zafrir Design' },
              { k: 'Website design', v: '26lights' },
            ],
          },
          {
            title: 'Liability',
            rows: [
              { k: 'Information', v: 'We take care to ensure that the information published (opening hours, distances, services) is accurate; it may change.' },
              { k: 'External links', v: 'The websites of Le Conteur, Scène and our partners are the responsibility of their respective publishers.' },
            ],
          },
          { title: 'Governing law', rows: [{ k: 'Law', v: 'Belgian law · courts of Brussels [to be validated]' }] },
        ],
      },
    },
  },
  nl: {
    sectionLabel: 'Juridische informatie',
    navLabel: 'Juridische pagina’s',
    bookingTerms: 'Reserveringsvoorwaarden',
    cookieHeaders: ['Cookie', 'Dienst', 'Doel', 'Duur'],
    pages: {
      privacy: {
        metaTitle: 'Privacybeleid | Craves Hotel',
        metaDescription: 'Hoe Craves Hotel uw persoonsgegevens verzamelt, gebruikt en beschermt, in overeenstemming met de AVG.',
        title: { text: 'Ons', em: 'privacybeleid' },
        updated: 'Laatst bijgewerkt: [datum van de nieuwe versie]',
        intro: 'Dit beleid legt uit hoe Craves Hotel uw persoonsgegevens verzamelt, gebruikt en beschermt, in overeenstemming met de AVG en de Belgische wetgeving inzake gegevensbescherming.',
        sections: [
          { title: '1. Wie wij zijn', text: 'Craves Hotel is een boetiekhotel in hartje Brussel. Voor alle vragen over privacy: info@craves-hotel.com, Rue du Marché aux Poulets 32, 1000 Brussel.' },
          {
            title: '2. Welke gegevens wij verzamelen',
            list: [
              'Identificatie: naam, e-mailadres, telefoonnummer, adres, nationaliteit, nummer van identiteitskaart of paspoort (indien wettelijk vereist bij het inchecken)',
              'Reservering: verblijfsdata, kamertype, voorkeuren, bijzondere verzoeken',
              'Betaling: bankkaartgegevens, veilig verwerkt door externe dienstverleners',
              'Klantgeschiedenis: eerdere verblijven, voorkeuren',
              'Marketingvoorkeuren: inschrijving op nieuwsbrieven of aanbiedingen',
              'Gebruik van de website: IP-adres, type browser, bezochte pagina’s, cookies',
            ],
          },
          {
            title: '3. Hoe wij uw gegevens gebruiken',
            list: [
              'Uw reservering en uw verblijf bevestigen, beheren en verzorgen',
              'Onze wettelijke verplichtingen nakomen (bv. registratie van gasten bij de politie indien vereist)',
              'Met u communiceren over uw reservering',
              'Betalingen verwerken en facturen opmaken',
              'Uw ervaring personaliseren en onze diensten verbeteren',
              'Nieuwsbrieven of aanbiedingen versturen, uitsluitend als u daarvoor toestemming hebt gegeven',
              'De goede werking en de beveiliging van de website verzekeren',
            ],
          },
          {
            title: '4. Rechtsgrond van de verwerking',
            list: [
              'Contractuele noodzaak: reserveringen beheren en logies verstrekken',
              'Wettelijke verplichtingen: boekhouding, registratie van gasten',
              'Toestemming: nieuwsbrieven en marketingcommunicatie',
              'Gerechtvaardigd belang: verbetering van onze diensten, fraudepreventie, klantrelatie',
            ],
          },
          {
            title: '5. Bewaartermijn',
            list: [
              'Reserverings- en factuurgegevens: 7 jaar, overeenkomstig de Belgische wetgeving',
              'Marketinginschrijvingen: tot u zich uitschrijft',
              'Cookies: zie de pagina Cookiebeleid',
              'Identiteitsbewijs: uitsluitend zolang de wet dat vereist',
            ],
          },
          {
            title: '6. Delen van uw gegevens',
            text: 'Wij verkopen uw gegevens niet. Wij kunnen ze delen met:',
            list: [
              'Reserveringsplatformen, als u er een hebt gebruikt (bv. Booking.com, Expedia)',
              'Betaaldienstverleners',
              'Onze IT-dienstverleners: reserveringsmodule (Lighthouse), hosting van de website (Cloudflare), verzending van e-mails (Brevo) [lijst te bevestigen]',
              'De bevoegde autoriteiten indien de wet dat vereist (politie, belastingadministratie)',
            ],
          },
          { title: '7. Uw rechten', text: 'U kunt op elk moment uw gegevens inzien, laten verbeteren, laten wissen (tenzij wij ze wettelijk moeten bewaren), uw toestemming voor marketing intrekken, bezwaar maken tegen bepaalde verwerkingen en de overdraagbaarheid van uw gegevens vragen. Schrijf ons op info@craves-hotel.com. U kunt ook een klacht indienen bij de Gegevensbeschermingsautoriteit (gegevensbeschermingsautoriteit.be).' },
          { title: '8. Cookies', text: 'Onze website gebruikt cookies voor de werking ervan, voor bezoekersstatistieken en, met uw toestemming, voor gepersonaliseerde advertenties. Details en uw keuzes vindt u op de pagina Cookiebeleid.' },
          { title: '9. Beveiliging', text: 'Wij nemen passende technische en organisatorische maatregelen om uw gegevens te beschermen tegen ongeoorloofde toegang, verlies of misbruik.' },
          { title: '10. Wijzigingen', text: 'Wij kunnen dit beleid bijwerken. De meest recente versie is altijd beschikbaar op deze pagina.' },
        ],
      },
      cookies: {
        metaTitle: 'Cookiebeleid | Craves Hotel',
        metaDescription: 'De cookies op de website van Craves Hotel, hun doel en hoe u uw keuzes beheert.',
        title: { text: 'Ons', em: 'cookiebeleid' },
        updated: 'Laatst bijgewerkt: [datum van de nieuwe versie]',
        intro: 'Een cookie is een klein bestand dat op uw toestel wordt geplaatst. Alleen strikt noodzakelijke cookies worden zonder uw toestemming geplaatst; u kunt uw keuzes op elk moment wijzigen.',
        sections: [
          {
            title: 'Strikt noodzakelijke cookies',
            text: 'Onmisbaar voor de werking van de website en om uw cookiekeuzes te onthouden. Hiervoor is uw toestemming niet vereist.',
            cookies: [
              { name: '[toestemmingscookie]', service: '[toestemmingstool]', purpose: 'Uw keuzes onthouden', duration: '[duur]' },
              { name: '[cookies van de module]', service: 'Lighthouse', purpose: 'Werking van de reservering', duration: '[duur]' },
            ],
          },
          {
            title: 'Bezoekersstatistieken',
            text: 'Helpen ons te begrijpen hoe de website wordt gebruikt, zodat wij hem kunnen verbeteren. Alleen geplaatst met uw toestemming.',
            cookies: [{ name: '_ga, _ga_HC9FCQ082S', service: 'Google Analytics', purpose: 'Bezoekstatistieken', duration: '[duur]' }],
          },
          {
            title: 'Marketing en reclame',
            text: 'Maken het mogelijk u relevante advertenties te tonen en onze campagnes te meten. Alleen geplaatst met uw toestemming.',
            cookies: [
              { name: '_gcl_au', service: 'Google Ads', purpose: 'Meting van conversies', duration: '[duur]' },
              { name: '_fbp', service: 'Meta (Facebook, Instagram)', purpose: 'Reclame en retargeting', duration: '[duur]' },
              { name: 'sjrn_ccid', service: 'Sojern', purpose: 'Reisadvertenties en retargeting', duration: '[duur]' },
              { name: 'sib_cuid', service: 'Brevo', purpose: 'Opvolging van e-mails en marketingautomatisering', duration: '[duur]' },
            ],
          },
        ],
        note: 'Deze lijst wordt automatisch gegenereerd door de toestemmingstool, met de exacte bewaartermijnen.',
      },
      legal: {
        metaTitle: 'Wettelijke vermeldingen | Craves Hotel',
        metaDescription: 'Wettelijke vermeldingen van de website van Craves Hotel, Rue du Marché aux Poulets 32, 1000 Brussel.',
        title: { text: 'Wettelijke', em: 'vermeldingen' },
        updated: 'Laatst bijgewerkt: [datum van de nieuwe versie]',
        sections: [
          {
            title: 'Uitgever van de website',
            rows: [
              { k: 'Maatschappelijke naam', v: '[aan te vullen]' },
              { k: 'Rechtsvorm', v: '[aan te vullen]' },
              { k: 'Maatschappelijke zetel', v: 'Rue du Marché aux Poulets 32, 1000 Brussel, België [te bevestigen]' },
              { k: 'Ondernemings- / btw-nummer', v: 'BE 0450 505 612' },
              { k: 'Contact', v: 'info@craves-hotel.com · +32 2 219 04 40' },
              { k: 'Verantwoordelijke uitgever', v: '[aan te vullen]' },
            ],
          },
          { title: 'Hosting', rows: [{ k: 'Hostingprovider', v: 'Cloudflare, Inc. · 101 Townsend St, San Francisco, CA 94107, Verenigde Staten' }] },
          {
            title: 'Reserveringen',
            rows: [
              { k: 'Reserveringsmodule', v: 'Lighthouse' },
              { k: 'Reserveringsvoorwaarden', v: 'Te raadplegen in de reserveringsmodule' },
            ],
          },
          {
            title: 'Intellectuele eigendom',
            rows: [
              { k: 'Inhoud', v: 'Teksten, foto’s, logo en het merk Craves: reproductie verboden zonder schriftelijke toestemming.' },
              { k: 'Fotocredits', v: '[aan te vullen]' },
              { k: 'Interieurontwerp', v: 'Saar Zafrir Design' },
              { k: 'Ontwerp van de website', v: '26lights' },
            ],
          },
          {
            title: 'Aansprakelijkheid',
            rows: [
              { k: 'Informatie', v: 'Wij waken over de juistheid van de gepubliceerde informatie (openingsuren, afstanden, diensten), die kan wijzigen.' },
              { k: 'Externe links', v: 'De websites van Le Conteur, Scène en onze partners vallen onder de verantwoordelijkheid van hun respectieve uitgevers.' },
            ],
          },
          { title: 'Toepasselijk recht', rows: [{ k: 'Recht', v: 'Belgisch recht · rechtbanken van Brussel [te valideren]' }] },
        ],
      },
    },
  },
};
