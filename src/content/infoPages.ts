import type { Localized, TitleParts } from './localize';

export interface FaqPageContent {
  metaTitle: string;
  metaDescription: string;
  title: TitleParts;
  lead: string;
  searchLabel: string;
  searchPlaceholder: string;
  noResult: string;
  themesLabel: string;
  help: { title: string; text: string; write: string };
}

export interface ContactPageContent {
  metaTitle: string;
  metaDescription: string;
  title: TitleParts;
  lead: string;
  details: string;
  hours: string;
  contacts: { label: string; value: string; href: string }[];
  form: {
    title: TitleParts;
    intro: string;
    bookingLink: string;
    firstName: string;
    lastName: string;
    email: string;
    subject: string;
    subjects: string[];
    booking: string;
    message: string;
    consent: string;
    privacyLink: string;
    send: string;
  };
}

export const FAQ_PAGE: Localized<FaqPageContent> = {
  fr: {
    metaTitle: 'FAQ : questions fréquentes sur le Craves Hotel Bruxelles',
    metaDescription:
      'Réservation, check-in, chambres, parking, accès depuis la gare du Midi : toutes les réponses avant votre séjour au Craves Hotel, à 4 minutes de la Grand-Place.',
    title: { text: 'Questions fréquentes', em: 'sur le Craves Hotel' },
    lead: 'Réservation, chambres, accès, services : les réponses avant votre séjour près de la Grand-Place. Mis à jour en octobre 2026.',
    searchLabel: 'Rechercher une question',
    searchPlaceholder: 'Rechercher : parking, check-in, lit bébé…',
    noResult: 'Aucune question ne correspond. Écrivez-nous, nous vous répondons rapidement.',
    themesLabel: 'Thèmes de la FAQ',
    help: {
      title: 'Pas trouvé votre réponse ?',
      text: 'Notre réception répond 24h/24, en anglais, français et néerlandais.',
      write: 'Nous écrire',
    },
  },
};

export const CONTACT_PAGE: Localized<ContactPageContent> = {
  fr: {
    metaTitle: 'Contact : Craves Hotel, rue du Marché aux Poulets 32, Bruxelles',
    metaDescription:
      'Contacter le Craves Hotel : +32 2 219 04 40, info@craves-hotel.com, rue du Marché aux Poulets 32, 1000 Bruxelles. Réception 24h/24 en anglais, français et néerlandais.',
    title: { text: 'Contacter', em: 'le Craves Hotel' },
    lead: 'Notre réception est ouverte 24h/24 et vous répond en anglais, français et néerlandais.',
    details: 'Coordonnées',
    hours: 'Réception 24h/24 · check-in dès 14h00 · check-out jusqu’à 11h30',
    contacts: [
      { label: 'Réservations et questions', value: 'info@craves-hotel.com', href: 'mailto:info@craves-hotel.com' },
      { label: 'Groupes (plus de 4 chambres)', value: 'group@craves-hotel.com', href: 'mailto:group@craves-hotel.com' },
      { label: 'Restaurant Le Conteur', value: 'le-conteur.com', href: 'https://le-conteur.com/fr' },
      { label: 'Bar Scène', value: 'scene-brussels.com', href: 'https://scene-brussels.com/fr' },
      { label: 'Candidatures', value: 'assistant-manager@craves-hotel.com', href: 'mailto:assistant-manager@craves-hotel.com' },
    ],
    form: {
      title: { text: 'Envoyez-nous', em: 'un message' },
      intro: 'Pour réserver, le plus rapide reste notre',
      bookingLink: 'module de réservation (-10 % avec le code THANKYOU)',
      firstName: 'Prénom',
      lastName: 'Nom',
      email: 'E-mail',
      subject: 'Sujet',
      subjects: ['Question avant mon séjour', 'Ma réservation', 'Facture', 'Objet oublié', 'Autre'],
      booking: 'N° de réservation (facultatif)',
      message: 'Message',
      consent: 'J’accepte que mes données soient utilisées pour répondre à ma demande, selon la',
      privacyLink: 'politique de confidentialité',
      send: 'Envoyer le message',
    },
  },
};
