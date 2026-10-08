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
  en: {
    metaTitle: 'FAQ: Craves Hotel Brussels, near the Grand-Place',
    metaDescription:
      'Booking, check-in, rooms, parking, getting here from Brussels-Midi: all the answers before your stay at Craves Hotel, 4 minutes from the Grand-Place.',
    title: { text: 'Frequently asked questions', em: 'about Craves Hotel' },
    lead: 'Booking, rooms, getting here, services: the answers before your stay near the Grand-Place. Updated October 2026.',
    searchLabel: 'Search for a question',
    searchPlaceholder: 'Search: parking, check-in, baby cot…',
    noResult: 'No question matches. Write to us and we will reply quickly.',
    themesLabel: 'FAQ topics',
    help: {
      title: 'Didn’t find your answer?',
      text: 'Our reception is available 24/7, in English, French and Dutch.',
      write: 'Write to us',
    },
  },
  nl: {
    metaTitle: 'FAQ: Craves Hotel Brussel, bij de Grote Markt',
    metaDescription:
      'Reserveren, check-in, kamers, parking, vanaf het Zuidstation: alle antwoorden voor uw verblijf in Craves Hotel, op 4 minuten van de Grote Markt.',
    title: { text: 'Veelgestelde vragen', em: 'over Craves Hotel' },
    lead: 'Reserveren, kamers, bereikbaarheid, diensten: de antwoorden voor uw verblijf bij de Grote Markt. Bijgewerkt in oktober 2026.',
    searchLabel: 'Zoek een vraag',
    searchPlaceholder: 'Zoeken: parking, check-in, babybedje…',
    noResult: 'Geen enkele vraag komt overeen. Schrijf ons, we antwoorden u snel.',
    themesLabel: 'Thema’s van de FAQ',
    help: {
      title: 'Uw antwoord niet gevonden?',
      text: 'Onze receptie staat 24 uur op 24 voor u klaar, in het Engels, Frans en Nederlands.',
      write: 'Schrijf ons',
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
  en: {
    metaTitle: 'Contact Craves Hotel, Rue du Marché aux Poulets 32, Brussels',
    metaDescription:
      'Contact Craves Hotel: +32 2 219 04 40, info@craves-hotel.com, Rue du Marché aux Poulets 32, 1000 Brussels. 24/7 reception in English, French and Dutch.',
    title: { text: 'Contact', em: 'Craves Hotel' },
    lead: 'Our reception is open 24/7 and can help you in English, French and Dutch.',
    details: 'Contact details',
    hours: '24/7 reception · check-in from 14:00 · check-out until 11:30',
    contacts: [
      { label: 'Bookings and questions', value: 'info@craves-hotel.com', href: 'mailto:info@craves-hotel.com' },
      { label: 'Groups (more than 4 rooms)', value: 'group@craves-hotel.com', href: 'mailto:group@craves-hotel.com' },
      { label: 'Le Conteur restaurant', value: 'le-conteur.com', href: 'https://le-conteur.com/en' },
      { label: 'Scène bar', value: 'scene-brussels.com', href: 'https://scene-brussels.com/en' },
      { label: 'Job applications', value: 'assistant-manager@craves-hotel.com', href: 'mailto:assistant-manager@craves-hotel.com' },
    ],
    form: {
      title: { text: 'Send us', em: 'a message' },
      intro: 'To book, the quickest way is still our',
      bookingLink: 'booking engine (-10% with the code THANKYOU)',
      firstName: 'First name',
      lastName: 'Last name',
      email: 'Email',
      subject: 'Subject',
      subjects: ['Question before my stay', 'My booking', 'Invoice', 'Lost item', 'Other'],
      booking: 'Booking number (optional)',
      message: 'Message',
      consent: 'I agree that my data may be used to respond to my request, in accordance with the',
      privacyLink: 'privacy policy',
      send: 'Send message',
    },
  },
  nl: {
    metaTitle: 'Contact: Craves Hotel, Rue du Marché aux Poulets 32, Brussel',
    metaDescription:
      'Contact Craves Hotel: +32 2 219 04 40, info@craves-hotel.com, Rue du Marché aux Poulets 32, 1000 Brussel. Receptie 24/24 in het Engels, Frans en Nederlands.',
    title: { text: 'Contact met', em: 'Craves Hotel' },
    lead: 'Onze receptie is 24 uur op 24 open en helpt u graag in het Engels, Frans en Nederlands.',
    details: 'Contactgegevens',
    hours: 'Receptie 24/24 · check-in vanaf 14.00 uur · check-out tot 11.30 uur',
    contacts: [
      { label: 'Reservaties en vragen', value: 'info@craves-hotel.com', href: 'mailto:info@craves-hotel.com' },
      { label: 'Groepen (meer dan 4 kamers)', value: 'group@craves-hotel.com', href: 'mailto:group@craves-hotel.com' },
      { label: 'Restaurant Le Conteur', value: 'le-conteur.com', href: 'https://le-conteur.com/nl' },
      { label: 'Bar Scène', value: 'scene-brussels.com', href: 'https://scene-brussels.com/nl' },
      { label: 'Sollicitaties', value: 'assistant-manager@craves-hotel.com', href: 'mailto:assistant-manager@craves-hotel.com' },
    ],
    form: {
      title: { text: 'Stuur ons', em: 'een bericht' },
      intro: 'Om te reserveren gaat het nog altijd het snelst via onze',
      bookingLink: 'reservatiemodule (-10% met de code THANKYOU)',
      firstName: 'Voornaam',
      lastName: 'Naam',
      email: 'E-mail',
      subject: 'Onderwerp',
      subjects: ['Vraag voor mijn verblijf', 'Mijn reservatie', 'Factuur', 'Vergeten voorwerp', 'Andere'],
      booking: 'Reservatienummer (optioneel)',
      message: 'Bericht',
      consent: 'Ik ga ermee akkoord dat mijn gegevens worden gebruikt om mijn aanvraag te beantwoorden, volgens het',
      privacyLink: 'privacybeleid',
      send: 'Bericht versturen',
    },
  },
};
