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

const EN: FaqCategory[] = [
  {
    id: 'reserver',
    title: 'Booking and payment',
    questions: {
      direct: { q: 'Is it cheaper to book on the hotel’s website?', a: 'Yes: -10% with the code THANKYOU, applied in the booking engine on our website.' },
      creditCard: { q: 'Can I book without a credit card?', a: 'A credit card is required to book online. You can then pay in cash on arrival.' },
      cancellation: { q: 'What is the cancellation policy?', a: 'It depends on the rate you choose. Flexible rate: free cancellation up to 24 hours before arrival, otherwise the first night is charged. Non-refundable rate: cannot be cancelled or changed.' },
      payment: { q: 'Which payment methods do you accept?', a: 'Visa, Mastercard, JCB, American Express, Bancontact, mobile payment and cash.' },
      cityTax: { q: 'How much is the city tax?', a: '€4.24 per room per night.' },
      deposit: { q: 'Is a deposit required?', a: 'Yes, €100 on arrival (cash, card or bank transfer), refunded on departure if no damage is found.' },
      noConfirmation: { q: 'I haven’t received my confirmation. What should I do?', a: 'Email us at info@craves-hotel.com.' },
      corporate: { q: 'Do you offer corporate rates?', a: 'Only under a Corporate contract. Send your request to info@craves-hotel.com.' },
    },
  },
  {
    id: 'sejour',
    title: 'Arrival and departure',
    questions: {
      checkIn: { q: 'What time is check-in?', a: 'From 14:00. Early check-in is possible on request at info@craves-hotel.com, subject to availability.' },
      checkOut: { q: 'What time is check-out?', a: 'Until 11:30. Late check-out is possible subject to availability; ask at reception (a supplement may apply).' },
      lateArrival: { q: 'Can I arrive late in the evening?', a: 'Yes, reception is open 24/7.' },
      idRequired: { q: 'What do I need to show on arrival?', a: 'A valid ID card or passport and a credit card.' },
      luggage: { q: 'Can I leave my luggage?', a: 'Yes, free of charge, both before check-in and after check-out.' },
      languages: { q: 'Which languages does reception speak?', a: 'English, French and Dutch.' },
      highFloor: { q: 'Can I have a room on a high floor?', a: 'On request at info@craves-hotel.com, subject to availability.' },
    },
  },
  {
    id: 'chambres',
    title: 'The rooms',
    questions: {
      roomCount: { q: 'How many rooms does the hotel have?', a: '75 rooms over 4 floors, including 5 family rooms.' },
      roomSizes: { q: 'How big are the rooms?', a: 'Single room 12 m², double 15 m², triple 20 m², family 50 m².' },
      twin: { q: 'What is the difference between a double and a twin room?', a: 'The twin has two single beds, the double one large bed (queen or king).' },
      inRoom: { q: 'What is in the rooms?', a: 'Air conditioning, free Wi-Fi, television, telephone and a private bathroom with bath or shower and hairdryer. Wardrobe in the double and triple rooms.' },
      aircon: { q: 'Are the rooms air-conditioned?', a: 'Yes, all rooms are air-conditioned.' },
      quiet: { q: 'Are the rooms quiet?', a: 'Craves is right in the heart of the city centre, a stone’s throw from the Grand-Place, so the streets are lively, especially in the evening. All rooms are air-conditioned, so you can keep the windows closed.' },
      bathtub: { q: 'Do the rooms have a bathtub?', a: '33 rooms have a bathtub, the others a shower. Ask for one when booking, subject to availability.' },
      familyBuilding: { q: 'Where are the family rooms?', a: 'In the building opposite the main building. It is part of the hotel but stands apart, so families can enjoy more peace and quiet. It is reached by a first flight of stairs, then a lift: let us know when booking if stairs are a problem.' },
      babyCot: { q: 'Is a baby cot available?', a: 'Yes, free of charge, on request at least 24 hours before arrival.' },
      extraBed: { q: 'Do you offer extra beds?', a: 'No.' },
      connecting: { q: 'Do you have connecting rooms?', a: 'No.' },
      accessible: { q: 'Do you have rooms adapted for guests with reduced mobility?', a: 'No, our rooms are not equipped for guests with reduced mobility.' },
      desk: { q: 'Do the rooms have a desk?', a: 'No.' },
      hairdryer: { q: 'Is there a hairdryer?', a: 'Yes, in every bathroom.' },
    },
  },
  {
    id: 'hotel',
    title: 'The hotel',
    questions: {
      stars: { q: 'How many stars does the hotel have?', a: 'Craves is a 3-star hotel.' },
      renovation: { q: 'When was the hotel renovated?', a: 'In 2022, with interiors by Saar Zafrir Design.' },
      lift: { q: 'Is there a lift?', a: 'Yes, 2 lifts in the main building. The family-room building has a lift, reached after a first flight of stairs.' },
      smoking: { q: 'Is the hotel non-smoking?', a: 'Yes. In case of a breach, a €100 cleaning fee is charged. An ashtray is available outside the entrance.' },
      pets: { q: 'Are pets allowed?', a: 'No.' },
      wifi: { q: 'Is the Wi-Fi free?', a: 'Yes, in all rooms and public areas.' },
      breakfast: { q: 'Do you serve breakfast?', a: 'Yes, a continental buffet, from 07:00 to 10:00 on weekdays and until 10:30 at weekends. €19 per adult, €10 per child.' },
    },
  },
  {
    id: 'services',
    title: 'Restaurant, bar and services',
    questions: {
      restaurant: { q: 'Is there a restaurant in the hotel?', a: 'Yes, Le Conteur, on the ground floor: Mediterranean tapas to share. Monday–Thursday 18:00–00:00, Friday–Saturday 18:00–01:00.' },
      guestPerks: { q: 'Do hotel guests get perks at Le Conteur and Scène?', a: 'Yes, as a Craves guest: -15% on your meal at Le Conteur, and your first cocktail at Scène is buy one, get one free. Both venues are also open to the public: booking is recommended.' },
      bar: { q: 'Is there a bar?', a: 'Yes, Scène, a speakeasy bar on the Atrium level. Wednesday 19:00–00:00, Thursday–Saturday 19:00–02:30.' },
      gym: { q: 'Is there a gym?', a: 'No. Basic-Fit (rue Antoine Dansaert) is 300 m away (4 min on foot).' },
      pool: { q: 'Is there a swimming pool?', a: 'No.' },
      roomService: { q: 'Do you offer room service?', a: 'No.' },
      laundry: { q: 'Is there a launderette?', a: 'There is no laundry service. The Wasbar launderette is 220 m away (3 min on foot).' },
    },
  },
  {
    id: 'acces',
    title: 'Getting here and the neighbourhood',
    questions: {
      address: { q: 'What is the hotel’s address?', a: 'Rue du Marché aux Poulets 32, 1000 Brussels.' },
      grandPlace: { q: 'How far is the Grand-Place?', a: '280 m, or 4 minutes on foot.' },
      station: { q: 'What is the nearest railway station?', a: 'Brussels Central Station, 600 m away (9 min on foot).' },
      midi: { q: 'How do I get here from Brussels-Midi station (Eurostar, TGV)?', a: 'By tram 3 or 4 to the Bourse stop (about 10 min), then 2 min on foot. Or by train to Brussels Central Station, then 9 min on foot.' },
      metro: { q: 'What is the nearest metro station?', a: 'De Brouckère (lines 1 and 5), 350 m away (5 min on foot).' },
      airport: { q: 'How do I get here from Brussels Airport?', a: 'By train to Brussels Central Station, then 9 min on foot. By taxi: 15 km, 25 to 40 min.' },
      charleroi: { q: 'How do I get here from Charleroi Airport?', a: 'The Flibco shuttle reaches Brussels in about 55 min, for around €20 per person.' },
      parking: { q: 'Where can I park?', a: 'The hotel has no private car park. Three public car parks less than 5 min away: Interparking Ecuyer (280 m), Brucity (300 m) and Monnaie (400 m). Booking recommended.' },
      evCharging: { q: 'Where can I charge an electric car?', a: 'Blue Corner charging point at rue Grétry 13, 150 m away. Most public car parks also have charging points.' },
      bike: { q: 'Where can I hire a bike?', a: 'Villo! Bourse station, 170 m away (2 min on foot).' },
      pharmacy: { q: 'Is there a pharmacy and a cash machine nearby?', a: 'Multipharma pharmacy 10 m away, cash machine in Bourse station 140 m away.' },
    },
  },
  {
    id: 'autres',
    title: 'Other questions',
    questions: {
      invoice: { q: 'How do I get an invoice?', a: 'Email info@craves-hotel.com, unless you booked through an agency or a platform (Expedia, etc.). VAT: BE 0450 505 612.' },
      lostItem: { q: 'I left something at the hotel.', a: 'Email info@craves-hotel.com.' },
      groups: { q: 'I am booking more than 4 rooms.', a: 'Send your request to group@craves-hotel.com.' },
      jobs: { q: 'I would like to work at Craves.', a: 'Send your CV to assistant-manager@craves-hotel.com.' },
    },
  },
];

const NL: FaqCategory[] = [
  {
    id: 'reserver',
    title: 'Reserveren en betalen',
    questions: {
      direct: { q: 'Is het goedkoper om via de website van het hotel te reserveren?', a: 'Ja: -10% met de code THANKYOU, toegepast in de reservatiemodule op onze website.' },
      creditCard: { q: 'Kan ik reserveren zonder kredietkaart?', a: 'Om online te reserveren is een kredietkaart nodig. Daarna kunt u bij aankomst contant betalen.' },
      cancellation: { q: 'Wat zijn de annuleringsvoorwaarden?', a: 'Die hangen af van het gekozen tarief. Flexibel tarief: gratis annuleren tot 24 uur voor aankomst, anders wordt de eerste nacht aangerekend. Niet-terugbetaalbaar tarief: niet te annuleren of te wijzigen.' },
      payment: { q: 'Welke betaalmiddelen aanvaardt u?', a: 'Visa, Mastercard, JCB, American Express, Bancontact, mobiel betalen en contant geld.' },
      cityTax: { q: 'Hoeveel bedraagt de toeristenbelasting?', a: '€ 4,24 per kamer per nacht.' },
      deposit: { q: 'Moet ik een waarborg betalen?', a: 'Ja, € 100 bij aankomst (contant, met kaart of via overschrijving), terugbetaald bij vertrek als er geen schade wordt vastgesteld.' },
      noConfirmation: { q: 'Ik heb mijn bevestiging niet ontvangen. Wat nu?', a: 'Mail ons op info@craves-hotel.com.' },
      corporate: { q: 'Biedt u bedrijfstarieven aan?', a: 'Alleen in het kader van een Corporate-contract. Aanvragen via info@craves-hotel.com.' },
    },
  },
  {
    id: 'sejour',
    title: 'Aankomst en vertrek',
    questions: {
      checkIn: { q: 'Hoe laat is de check-in?', a: 'Vanaf 14.00 uur. Vroeger inchecken is mogelijk op aanvraag via info@craves-hotel.com, afhankelijk van de beschikbaarheid.' },
      checkOut: { q: 'Hoe laat is de check-out?', a: 'Tot 11.30 uur. Later uitchecken is mogelijk afhankelijk van de beschikbaarheid; vraag het aan de receptie (eventueel tegen toeslag).' },
      lateArrival: { q: 'Kan ik ’s avonds laat aankomen?', a: 'Ja, de receptie is 24 uur op 24 open.' },
      idRequired: { q: 'Wat moet ik bij aankomst voorleggen?', a: 'Een geldige identiteitskaart of geldig paspoort en een kredietkaart.' },
      luggage: { q: 'Kan ik mijn bagage achterlaten?', a: 'Ja, gratis, zowel voor de check-in als na de check-out.' },
      languages: { q: 'Welke talen spreekt de receptie?', a: 'Engels, Frans en Nederlands.' },
      highFloor: { q: 'Kan ik een kamer op een hogere verdieping krijgen?', a: 'Op aanvraag via info@craves-hotel.com, afhankelijk van de beschikbaarheid.' },
    },
  },
  {
    id: 'chambres',
    title: 'De kamers',
    questions: {
      roomCount: { q: 'Hoeveel kamers telt het hotel?', a: '75 kamers verdeeld over 4 verdiepingen, waaronder 5 familiekamers.' },
      roomSizes: { q: 'Hoe groot zijn de kamers?', a: 'Eenpersoonskamer 12 m², tweepersoonskamer 15 m², driepersoonskamer 20 m², familiekamer 50 m².' },
      twin: { q: 'Wat is het verschil tussen een tweepersoonskamer en een twin?', a: 'De twin heeft twee aparte eenpersoonsbedden, de tweepersoonskamer één groot bed (queen of king).' },
      inRoom: { q: 'Wat is er in de kamers?', a: 'Airconditioning, gratis wifi, televisie, telefoon en een eigen badkamer met bad of douche en haardroger. Kleerkast in de twee- en driepersoonskamers.' },
      aircon: { q: 'Hebben de kamers airconditioning?', a: 'Ja, alle kamers hebben airconditioning.' },
      quiet: { q: 'Zijn de kamers rustig?', a: 'Craves ligt midden in het hypercentrum, op een steenworp van de Grote Markt: er is dus leven in de straten, vooral ’s avonds. Alle kamers hebben airconditioning, zodat u de ramen dicht kunt houden.' },
      bathtub: { q: 'Hebben de kamers een bad?', a: '33 kamers hebben een bad, de andere een douche. Vraag ernaar bij uw reservatie, afhankelijk van de beschikbaarheid.' },
      familyBuilding: { q: 'Waar bevinden de familiekamers zich?', a: 'In het gebouw tegenover het hoofdgebouw. Het hoort bij het hotel maar staat apart, zodat gezinnen meer rust hebben. U bereikt het via een eerste trap en daarna een lift: meld het bij uw reservatie als trappen een probleem vormen.' },
      babyCot: { q: 'Is een babybedje mogelijk?', a: 'Ja, gratis, op aanvraag minstens 24 uur voor aankomst.' },
      extraBed: { q: 'Biedt u extra bedden aan?', a: 'Nee.' },
      connecting: { q: 'Hebt u communicerende kamers?', a: 'Nee.' },
      accessible: { q: 'Hebt u kamers aangepast aan personen met beperkte mobiliteit?', a: 'Nee, onze kamers zijn niet uitgerust voor personen met beperkte mobiliteit.' },
      desk: { q: 'Hebben de kamers een bureau?', a: 'Nee.' },
      hairdryer: { q: 'Is er een haardroger?', a: 'Ja, in alle badkamers.' },
    },
  },
  {
    id: 'hotel',
    title: 'Het hotel',
    questions: {
      stars: { q: 'Hoeveel sterren heeft het hotel?', a: 'Craves is een driesterrenhotel.' },
      renovation: { q: 'Wanneer werd het hotel gerenoveerd?', a: 'In 2022, met een ontwerp van Saar Zafrir Design.' },
      lift: { q: 'Is er een lift?', a: 'Ja, 2 liften in het hoofdgebouw. Het gebouw met de familiekamers heeft een lift, bereikbaar na een eerste trap.' },
      smoking: { q: 'Is het hotel rookvrij?', a: 'Ja. Bij overtreding wordt € 100 schoonmaakkosten aangerekend. Aan de ingang staat een asbak ter beschikking.' },
      pets: { q: 'Zijn huisdieren toegelaten?', a: 'Nee.' },
      wifi: { q: 'Is de wifi gratis?', a: 'Ja, in alle kamers en gemeenschappelijke ruimtes.' },
      breakfast: { q: 'Serveert u ontbijt?', a: 'Ja, een continentaal buffet, van 7.00 tot 10.00 uur op weekdagen en tot 10.30 uur in het weekend. € 19 per volwassene, € 10 per kind.' },
    },
  },
  {
    id: 'services',
    title: 'Restaurant, bar en diensten',
    questions: {
      restaurant: { q: 'Is er een restaurant in het hotel?', a: 'Ja, Le Conteur, op het gelijkvloers: mediterrane tapas om te delen. Maandag–donderdag 18.00–00.00 uur, vrijdag–zaterdag 18.00–01.00 uur.' },
      guestPerks: { q: 'Krijgen hotelgasten voordelen bij Le Conteur en Scène?', a: 'Ja, als gast van Craves: -15% op uw maaltijd bij Le Conteur, en bij Scène krijgt u bij uw eerste cocktail er een tweede gratis bij. Beide zaken zijn ook open voor het publiek: reserveren is aangeraden.' },
      bar: { q: 'Is er een bar?', a: 'Ja, Scène, een verborgen speakeasybar op het Atrium-niveau. Woensdag 19.00–00.00 uur, donderdag–zaterdag 19.00–02.30 uur.' },
      gym: { q: 'Is er een fitnessruimte?', a: 'Nee. Basic-Fit (Antoine Dansaertstraat) ligt op 300 m (4 min te voet).' },
      pool: { q: 'Is er een zwembad?', a: 'Nee.' },
      roomService: { q: 'Biedt u roomservice aan?', a: 'Nee.' },
      laundry: { q: 'Is er een wasserette?', a: 'Er is geen wasservice. Wasserette Wasbar ligt op 220 m (3 min te voet).' },
    },
  },
  {
    id: 'acces',
    title: 'Bereikbaarheid en buurt',
    questions: {
      address: { q: 'Wat is het adres van het hotel?', a: 'Rue du Marché aux Poulets 32, 1000 Brussel.' },
      grandPlace: { q: 'Hoe ver is de Grote Markt?', a: '280 m, of 4 minuten te voet.' },
      station: { q: 'Wat is het dichtstbijzijnde station?', a: 'Brussel-Centraal, op 600 m (9 min te voet).' },
      midi: { q: 'Hoe kom ik er vanaf het Zuidstation (Eurostar, TGV)?', a: 'Met tram 3 of 4 tot de halte Beurs (ongeveer 10 min), daarna 2 min te voet. Of met de trein tot Brussel-Centraal, daarna 9 min te voet.' },
      metro: { q: 'Wat is het dichtstbijzijnde metrostation?', a: 'De Brouckère (lijnen 1 en 5), op 350 m (5 min te voet).' },
      airport: { q: 'Hoe kom ik er vanaf Brussels Airport?', a: 'Met de trein tot Brussel-Centraal, daarna 9 min te voet. Met de taxi: 15 km, 25 tot 40 min.' },
      charleroi: { q: 'Hoe kom ik er vanaf de luchthaven van Charleroi?', a: 'De Flibco-shuttle rijdt in ongeveer 55 min naar Brussel, voor ongeveer € 20 per persoon.' },
      parking: { q: 'Waar kan ik parkeren?', a: 'Het hotel heeft geen eigen parking. Drie openbare parkings op minder dan 5 min: Interparking Ecuyer (280 m), Brucity (300 m) en Monnaie (400 m). Reserveren is aangeraden.' },
      evCharging: { q: 'Waar kan ik een elektrische auto opladen?', a: 'Laadpaal van Blue Corner in de Grétrystraat 13, op 150 m. De meeste openbare parkings hebben ook laadpalen.' },
      bike: { q: 'Waar kan ik een fiets huren?', a: 'Villo!-station Beurs, op 170 m (2 min te voet).' },
      pharmacy: { q: 'Is er een apotheek en een geldautomaat in de buurt?', a: 'Apotheek Multipharma op 10 m, geldautomaat in het station Beurs op 140 m.' },
    },
  },
  {
    id: 'autres',
    title: 'Andere vragen',
    questions: {
      invoice: { q: 'Hoe krijg ik een factuur?', a: 'Mail naar info@craves-hotel.com, tenzij u via een agentschap of platform (Expedia enz.) hebt gereserveerd. Btw: BE 0450 505 612.' },
      lostItem: { q: 'Ik heb iets in het hotel laten liggen.', a: 'Mail naar info@craves-hotel.com.' },
      groups: { q: 'Ik reserveer meer dan 4 kamers.', a: 'Stuur uw aanvraag naar group@craves-hotel.com.' },
      jobs: { q: 'Ik wil graag bij Craves werken.', a: 'Stuur uw cv naar assistant-manager@craves-hotel.com.' },
    },
  },
];

export const FAQ: Localized<FaqCategory[]> = { fr: FR, en: EN, nl: NL };

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
