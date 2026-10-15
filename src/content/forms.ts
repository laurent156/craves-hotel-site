import type { Localized } from './localize';

/** Messages shared by every form of the site (the script in components/forms shows them next to the button). */
export interface FormStatusTexts {
  sending: string;
  /** Shown when the message could not be sent, followed by the hotel's phone and e-mail. */
  error: string;
}

export const FORM_STATUS: Localized<FormStatusTexts> = {
  fr: {
    sending: 'Envoi en cours…',
    error: 'Une erreur est survenue, votre message n’est pas parti. Réessayez, ou contactez-nous directement :',
  },
  en: {
    sending: 'Sending…',
    error: 'Something went wrong and your message was not sent. Please try again, or contact us directly:',
  },
  nl: {
    sending: 'Bezig met verzenden…',
    error: 'Er is iets misgegaan en uw bericht is niet verzonden. Probeer het opnieuw of neem rechtstreeks contact op:',
  },
};
