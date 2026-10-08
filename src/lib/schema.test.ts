import { describe, expect, test } from 'vitest';
import { HOTEL_ID, hotelNode, roomNode, venueNode, websiteNode } from './schema';
import { getRoom } from '../content/rooms';

const SITE = 'https://craves-hotel.com';

describe('hotelNode', () => {
  const hotel = hotelNode({ site: SITE, locale: 'fr', images: [`${SITE}/a.webp`], logo: `${SITE}/logo.png` });

  test('identifies the hotel with a stable @id reused by every page', () => {
    expect(hotel['@type']).toBe('Hotel');
    expect(hotel['@id']).toBe(`${SITE}/#hotel`);
    expect(HOTEL_ID(SITE)).toBe(`${SITE}/#hotel`);
  });

  test('carries the facts used everywhere else on the site', () => {
    expect(hotel).toMatchObject({
      name: 'Craves Hotel',
      telephone: '+32 2 219 04 40',
      email: 'info@craves-hotel.com',
      numberOfRooms: 75,
      checkinTime: '14:00',
      checkoutTime: '11:30',
      petsAllowed: false,
      smokingAllowed: false,
      starRating: { '@type': 'Rating', ratingValue: 3 },
      address: { '@type': 'PostalAddress', streetAddress: 'Rue du Marché aux Poulets 32', postalCode: '1000', addressCountry: 'BE' },
    });
  });

  test('points to the direct booking engine and to the hotel profiles elsewhere', () => {
    expect(JSON.stringify(hotel.potentialAction)).toContain('bookingengine.mylighthouse.com');
    expect(hotel.sameAs).toEqual(expect.arrayContaining(['https://www.instagram.com/craveshotel_brussels']));
  });

  test('never publishes prices', () => {
    expect(JSON.stringify(hotel)).not.toMatch(/priceRange|"price"/);
  });
});

describe('websiteNode', () => {
  test('is published by the hotel', () => {
    expect(websiteNode(SITE, 'fr')).toMatchObject({ '@type': 'WebSite', publisher: { '@id': `${SITE}/#hotel` }, inLanguage: 'fr' });
  });
});

describe('roomNode', () => {
  test('describes the room size, occupancy and links it to the hotel', () => {
    const room = roomNode({ site: SITE, room: getRoom('roomFamily'), locale: 'fr', url: `${SITE}/fr/chambres/chambre-famille/`, image: `${SITE}/f.webp` });

    expect(room).toMatchObject({
      '@type': 'HotelRoom',
      name: 'Chambre famille',
      floorSize: { '@type': 'QuantitativeValue', value: 50, unitCode: 'MTK' },
      occupancy: { '@type': 'QuantitativeValue', maxValue: 4 },
      containedInPlace: { '@id': `${SITE}/#hotel` },
    });
  });
});

describe('venueNode', () => {
  test('describes Le Conteur as a restaurant inside the hotel with its opening hours', () => {
    const venue = venueNode({ site: SITE, venue: 'conteur', locale: 'fr', url: `${SITE}/fr/le-conteur/`, image: `${SITE}/c.webp` });

    expect(venue['@type']).toBe('Restaurant');
    expect(venue).toMatchObject({ servesCuisine: 'Méditerranéenne', containedInPlace: { '@id': `${SITE}/#hotel` } });
    expect(venue.openingHoursSpecification).toHaveLength(2);
  });

  test('describes Scène as a bar', () => {
    expect(venueNode({ site: SITE, venue: 'scene', locale: 'fr', url: `${SITE}/fr/scene/`, image: `${SITE}/s.webp` })['@type']).toBe('BarOrPub');
  });
});
