import type { Locale } from '../i18n/locales';
import { pick, type FaqItem, type Localized } from './localize';

// Single source of truth for every answer on the site (FAQ page, home, rooms, location…).
// Pages pick questions by id, so a fact changed here changes everywhere.

export interface FaqCategory {
  id: string;
  title: string;
  questions: Record<string, FaqItem>;
}

const FR: FaqCategory[] = [
  {
    id: 'reserver',
    title: 'Réserver et payer',
    questions: {
      direct: { q: 'Est-ce moins cher de réserver sur le site de l’hôtel ?', a: 'Oui : -10 % avec le code THANKYOU, appliqué dans le module de réservation de notre site.' },
      creditCard: { q: 'Puis-je réserver sans carte de crédit ?', a: 'Une carte de crédit est nécessaire pour réserver en ligne. Vous pouvez ensuite régler en espèces à l’arrivée.' },
      cancellation: { q: 'Quelle est la politique d’annulation ?', a: 'Elle dépend du tarif choisi. Tarif flexible : annulation gratuite jusqu’à 24 h avant l’arrivée, sinon la première nuit est facturée. Tarif non remboursable : ni annulable ni modifiable.' },
      payment: { q: 'Quels moyens de paiement acceptez-vous ?', a: 'Visa, Mastercard, JCB, American Express, Bancontact, paiement mobile et espèces.' },
      cityTax: { q: 'Combien coûte la taxe de séjour ?', a: '4,24 € par chambre et par nuit.' },
      deposit: { q: 'Faut-il verser une caution ?', a: 'Oui, 100 € à l’arrivée (espèces, carte ou virement), remboursés au départ si aucun dommage n’est constaté.' },
      noConfirmation: { q: 'Je n’ai pas reçu ma confirmation. Que faire ?', a: 'Écrivez-nous à info@craves-hotel.com.' },
      corporate: { q: 'Proposez-vous des tarifs entreprise ?', a: 'Uniquement dans le cadre d’un contrat Corporate. Demande à info@craves-hotel.com.' },
    },
  },
  {
    id: 'sejour',
    title: 'Arrivée et départ',
    questions: {
      checkIn: { q: 'À quelle heure est le check-in ?', a: 'Dès 14h00. Un early check-in est possible sur demande à info@craves-hotel.com, selon disponibilité.' },
      checkOut: { q: 'À quelle heure est le check-out ?', a: 'Jusqu’à 11h30. Un late check-out est possible selon disponibilité, à demander à la réception (supplément éventuel).' },
      lateArrival: { q: 'Puis-je arriver tard le soir ?', a: 'Oui, la réception est ouverte 24h/24.' },
      idRequired: { q: 'Que dois-je présenter à l’arrivée ?', a: 'Une pièce d’identité ou un passeport valide et une carte de crédit.' },
      luggage: { q: 'Puis-je déposer mes bagages ?', a: 'Oui, gratuitement, avant le check-in comme après le check-out.' },
      languages: { q: 'Quelles langues parle la réception ?', a: 'Anglais, français et néerlandais.' },
      highFloor: { q: 'Puis-je avoir une chambre en étage élevé ?', a: 'Sur demande à info@craves-hotel.com, selon disponibilité.' },
    },
  },
  {
    id: 'chambres',
    title: 'Les chambres',
    questions: {
      roomCount: { q: 'Combien de chambres compte l’hôtel ?', a: '75 chambres sur 4 étages, dont 5 chambres famille.' },
      roomSizes: { q: 'Quelle est la taille des chambres ?', a: 'Chambre simple 12 m², double 15 m², triple 20 m², famille 50 m².' },
      twin: { q: 'Quelle est la différence entre une chambre double et twin ?', a: 'La twin a deux lits simples (jumeaux), la double un grand lit (queen ou king).' },
      inRoom: { q: 'Qu’y a-t-il dans les chambres ?', a: 'Climatisation, Wi-Fi gratuit, télévision, téléphone et salle de bains privative avec baignoire ou douche et sèche-cheveux. Armoire de rangement dans les chambres double et triple.' },
      aircon: { q: 'Les chambres sont-elles climatisées ?', a: 'Oui, toutes les chambres sont climatisées.' },
      quiet: { q: 'Les chambres sont-elles calmes ?', a: 'Le Craves est en plein hyper-centre, à deux pas de la Grand-Place : il y a donc de l’activité dans les rues, surtout le soir. Toutes les chambres sont climatisées, ce qui permet de garder les fenêtres fermées.' },
      bathtub: { q: 'Les chambres ont-elles une baignoire ?', a: '33 chambres ont une baignoire, les autres une douche. Demandez-la à la réservation, selon disponibilité.' },
      familyBuilding: { q: 'Où se trouvent les chambres famille ?', a: 'Dans le bâtiment en face du bâtiment principal. Il fait partie de l’hôtel mais reste à part, pour que les familles soient plus tranquilles. On y accède par une première volée d’escalier, puis un ascenseur : signalez-le à la réservation si les escaliers posent problème.' },
      babyCot: { q: 'Un lit bébé est-il possible ?', a: 'Oui, gratuitement, sur demande au moins 24 h avant l’arrivée.' },
      extraBed: { q: 'Proposez-vous des lits d’appoint ?', a: 'Non.' },
      connecting: { q: 'Avez-vous des chambres communicantes ?', a: 'Non.' },
      accessible: { q: 'Avez-vous des chambres adaptées aux personnes à mobilité réduite ?', a: 'Non, nos chambres ne sont pas équipées pour les personnes à mobilité réduite.' },
      desk: { q: 'Les chambres ont-elles un bureau ?', a: 'Non.' },
      hairdryer: { q: 'Y a-t-il un sèche-cheveux ?', a: 'Oui, dans toutes les salles de bains.' },
    },
  },
  {
    id: 'hotel',
    title: 'L’hôtel',
    questions: {
      stars: { q: 'Combien d’étoiles a l’hôtel ?', a: 'Le Craves est un hôtel 3 étoiles.' },
      renovation: { q: 'Quand l’hôtel a-t-il été rénové ?', a: 'En 2022, avec un design signé Saar Zafrir Design.' },
      lift: { q: 'Y a-t-il un ascenseur ?', a: 'Oui, 2 ascenseurs dans le bâtiment principal. Le bâtiment des chambres famille a un ascenseur, accessible après une première volée d’escalier.' },
      smoking: { q: 'L’hôtel est-il non-fumeur ?', a: 'Oui. En cas d’infraction, 100 € de frais de nettoyage sont facturés. Un cendrier est à disposition devant l’entrée.' },
      pets: { q: 'Les animaux sont-ils acceptés ?', a: 'Non.' },
      wifi: { q: 'Le Wi-Fi est-il gratuit ?', a: 'Oui, dans toutes les chambres et les espaces communs.' },
      breakfast: { q: 'Proposez-vous le petit-déjeuner ?', a: 'Oui, un buffet continental, de 7h00 à 10h00 en semaine et jusqu’à 10h30 le week-end. 19 € par adulte, 10 € par enfant.' },
    },
  },
  {
    id: 'services',
    title: 'Restaurant, bar et services',
    questions: {
      restaurant: { q: 'Y a-t-il un restaurant dans l’hôtel ?', a: 'Oui, Le Conteur, au rez-de-chaussée : tapas méditerranéennes à partager. Lundi–jeudi 18h00–00h00, vendredi–samedi 18h00–01h00.' },
      guestPerks: { q: 'Les clients de l’hôtel ont-ils des avantages au Conteur et à Scène ?', a: 'Oui, en étant client du Craves : -15 % sur votre repas au Conteur, et votre premier cocktail à Scène en 1 acheté = 1 offert. Les deux lieux sont aussi ouverts au public : la réservation est conseillée.' },
      bar: { q: 'Y a-t-il un bar ?', a: 'Oui, Scène, bar clandestin au niveau Atrium. Mercredi 19h00–00h00, jeudi–samedi 19h00–02h30.' },
      gym: { q: 'Y a-t-il une salle de sport ?', a: 'Non. Basic-Fit (rue Antoine Dansaert) est à 300 m (4 min à pied).' },
      pool: { q: 'Y a-t-il une piscine ?', a: 'Non.' },
      roomService: { q: 'Proposez-vous un room service ?', a: 'Non.' },
      laundry: { q: 'Y a-t-il une laverie ?', a: 'Pas de service de blanchisserie. La laverie Wasbar est à 220 m (3 min à pied).' },
    },
  },
  {
    id: 'acces',
    title: 'Accès et quartier',
    questions: {
      address: { q: 'Quelle est l’adresse de l’hôtel ?', a: 'Rue du Marché aux Poulets 32, 1000 Bruxelles.' },
      grandPlace: { q: 'À quelle distance est la Grand-Place ?', a: '280 m, soit 4 minutes à pied.' },
      station: { q: 'Quelle est la gare la plus proche ?', a: 'La Gare Centrale, à 600 m (9 min à pied).' },
      midi: { q: 'Comment venir depuis la gare du Midi (Eurostar, TGV) ?', a: 'En tram 3 ou 4 jusqu’à l’arrêt Bourse (environ 10 min), puis 2 min à pied. Ou en train jusqu’à la Gare Centrale, puis 9 min à pied.' },
      metro: { q: 'Quelle est la station de métro la plus proche ?', a: 'De Brouckère (lignes 1 et 5), à 350 m (5 min à pied).' },
      airport: { q: 'Comment venir depuis Brussels Airport ?', a: 'En train jusqu’à la Gare Centrale, puis 9 min à pied. En taxi : 15 km, 25 à 40 min.' },
      charleroi: { q: 'Comment venir depuis l’aéroport de Charleroi ?', a: 'La navette Flibco rejoint Bruxelles en 55 min environ, pour environ 20 € par personne.' },
      parking: { q: 'Où se garer ?', a: 'L’hôtel n’a pas de parking privé. Trois parkings publics à moins de 5 min : Interparking Ecuyer (280 m), Brucity (300 m) et Monnaie (400 m). Réservation recommandée.' },
      evCharging: { q: 'Où recharger une voiture électrique ?', a: 'Borne Blue Corner rue Grétry 13, à 150 m. La plupart des parkings publics proposent aussi des bornes.' },
      bike: { q: 'Où louer un vélo ?', a: 'Station Villo! Bourse, à 170 m (2 min à pied).' },
      pharmacy: { q: 'Y a-t-il une pharmacie et un distributeur à proximité ?', a: 'Pharmacie Multipharma à 10 m, distributeur dans la station Bourse à 140 m.' },
    },
  },
  {
    id: 'autres',
    title: 'Autres questions',
    questions: {
      invoice: { q: 'Comment obtenir une facture ?', a: 'Écrivez à info@craves-hotel.com, sauf si vous avez réservé via une agence ou une plateforme (Expedia, etc.). TVA : BE 0450 505 612.' },
      lostItem: { q: 'J’ai oublié un objet à l’hôtel.', a: 'Écrivez à info@craves-hotel.com.' },
      groups: { q: 'Je réserve plus de 4 chambres.', a: 'Envoyez votre demande à group@craves-hotel.com.' },
      jobs: { q: 'Je souhaite travailler au Craves.', a: 'Envoyez votre CV à assistant-manager@craves-hotel.com.' },
    },
  },
];

export const FAQ: Localized<FaqCategory[]> = { fr: FR };

/** All questions of one language, flattened by id. */
export function faqIndex(categories: FaqCategory[]): Record<string, FaqItem> {
  return Object.assign({}, ...categories.map((c) => c.questions));
}

/** Questions picked by id, for a page's FAQ block. Throws on an unknown id. */
export function faqItems(locale: Locale, ids: string[]): FaqItem[] {
  const index = faqIndex(pick(FAQ, locale));
  return ids.map((id) => {
    const item = index[id];
    if (!item) throw new Error(`Unknown FAQ question id "${id}"`);
    return item;
  });
}
