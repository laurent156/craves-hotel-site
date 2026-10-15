import type { Localized, TitleParts } from './localize';

// Hidden page for guests who want to reach the management directly during their stay
// (QR code, link in a message). Not listed in the menus, the sitemap or search engines.
export interface ContactManagerContent {
  metaTitle: string;
  metaDescription: string;
  /** Last item of the breadcrumb. */
  crumb: string;
  title: TitleParts;
  lead: string;
  urgent: string;
  form: {
    roomNumber: string;
    roomNumberPlaceholder: string;
    fullName: string;
    fullNamePlaceholder: string;
    message: string;
    messagePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    phone: string;
    phonePlaceholder: string;
    privacy: string;
    privacyLink: string;
    send: string;
    success: string;
  };
}

export const CONTACT_MANAGER: Localized<ContactManagerContent> = {
  fr: {
    metaTitle: 'Contacter la direction : Craves Hotel Bruxelles',
    metaDescription: 'Un souci pendant votre séjour ? Écrivez directement à la direction du Craves Hotel : votre message est traité immédiatement.',
    crumb: 'Contacter la direction',
    title: { text: 'Comment pouvons-nous', em: 'vous aider ?' },
    lead: 'Votre confort et votre satisfaction sont notre priorité. Si quelque chose ne répond pas à vos attentes pendant votre séjour, dites-le-nous ci-dessous : votre message arrive directement à la direction, qui s’en occupe immédiatement.',
    urgent: 'Besoin d’aide tout de suite ? La réception répond 24h/24 :',
    form: {
      roomNumber: 'Numéro de chambre',
      roomNumberPlaceholder: 'ex. 204',
      fullName: 'Nom et prénom',
      fullNamePlaceholder: 'Nom et prénom',
      message: 'Comment pouvons-nous améliorer votre séjour ?',
      messagePlaceholder: 'Décrivez votre demande ou le problème, pour que nous puissions agir tout de suite…',
      email: 'Adresse e-mail',
      emailPlaceholder: 'ex. nom@exemple.com',
      phone: 'Téléphone / WhatsApp',
      phonePlaceholder: '+32 … (si vous préférez un appel ou un message WhatsApp)',
      privacy: 'Ces informations servent uniquement à traiter votre demande. Voir la',
      privacyLink: 'politique de confidentialité',
      send: 'Envoyer à la direction',
      success:
        'Merci de nous l’avoir signalé. Votre message a été transmis directement à la direction et à la réception de service. Nous traitons votre demande immédiatement, pour que votre séjour soit parfait.',
    },
  },
  en: {
    metaTitle: 'Contact the management: Craves Hotel Brussels',
    metaDescription: 'Something not right during your stay? Write directly to the management of Craves Hotel: your message is handled immediately.',
    crumb: 'Contact the management',
    title: { text: 'How can we', em: 'assist you?' },
    lead: 'Your comfort and satisfaction are our top priorities. If something during your stay is not meeting your expectations, please let us know below. This message goes directly to our management team for immediate handling.',
    urgent: 'Need help right now? Our reception answers 24/7:',
    form: {
      roomNumber: 'Room number',
      roomNumberPlaceholder: 'e.g. 204',
      fullName: 'Full name',
      fullNamePlaceholder: 'Full name',
      message: 'How can we improve your stay?',
      messagePlaceholder: 'Please describe your request or issue so we can fix it right away…',
      email: 'Email address',
      emailPlaceholder: 'e.g. name@example.com',
      phone: 'Phone number / WhatsApp',
      phonePlaceholder: '+32 … (if you prefer a call or a WhatsApp message)',
      privacy: 'This information is only used to handle your request. See the',
      privacyLink: 'privacy policy',
      send: 'Send to the management',
      success:
        'Thank you for letting us know. Your message has been sent directly to our General Manager and the duty reception. We are looking into your request immediately to make sure your stay is perfect.',
    },
  },
  nl: {
    metaTitle: 'Contact met de directie: Craves Hotel Brussel',
    metaDescription: 'Loopt er iets mis tijdens uw verblijf? Schrijf rechtstreeks naar de directie van Craves Hotel: uw bericht wordt meteen behandeld.',
    crumb: 'Contact met de directie',
    title: { text: 'Hoe kunnen we', em: 'u helpen?' },
    lead: 'Uw comfort en tevredenheid staan bij ons voorop. Voldoet iets tijdens uw verblijf niet aan uw verwachtingen, laat het ons dan hieronder weten: uw bericht komt rechtstreeks bij de directie terecht, die er meteen mee aan de slag gaat.',
    urgent: 'Meteen hulp nodig? Onze receptie staat 24 uur op 24 voor u klaar:',
    form: {
      roomNumber: 'Kamernummer',
      roomNumberPlaceholder: 'bv. 204',
      fullName: 'Voor- en achternaam',
      fullNamePlaceholder: 'Voor- en achternaam',
      message: 'Hoe kunnen we uw verblijf verbeteren?',
      messagePlaceholder: 'Beschrijf uw vraag of het probleem, zodat we meteen kunnen ingrijpen…',
      email: 'E-mailadres',
      emailPlaceholder: 'bv. naam@voorbeeld.com',
      phone: 'Telefoon / WhatsApp',
      phonePlaceholder: '+32 … (als u liever gebeld wordt of een WhatsApp-bericht krijgt)',
      privacy: 'Deze gegevens worden enkel gebruikt om uw vraag te behandelen. Zie het',
      privacyLink: 'privacybeleid',
      send: 'Verstuur naar de directie',
      success:
        'Bedankt dat u het ons laat weten. Uw bericht is rechtstreeks naar onze directeur en de receptie van dienst verstuurd. We behandelen uw vraag meteen, zodat uw verblijf perfect wordt.',
    },
  },
};
