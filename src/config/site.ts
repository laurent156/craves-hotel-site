// Facts shared by every page. Keep them identical everywhere (SEO/GEO consistency).
export const SITE = {
  name: 'Craves Hotel',
  url: 'https://craves-hotel.com',
  phone: '+32 2 219 04 40',
  phoneHref: 'tel:+3222190440',
  email: 'info@craves-hotel.com',
  address: {
    street: 'Rue du Marché aux Poulets 32',
    postalCode: '1000',
    city: 'Bruxelles',
    country: 'BE',
  },
  social: {
    instagram: 'https://www.instagram.com/craveshotel_brussels',
    facebook: 'https://www.facebook.com/CravesHotelBrussels',
  },
  partners: {
    conteur: 'https://le-conteur.com',
    scene: 'https://scene-bar.com',
  },
  rooms: 75,
  checkIn: '14:00',
  checkOut: '11:30',
} as const;

export const BOOKING = {
  engineUrl: 'https://bookingengine.mylighthouse.com/v2/10550/Rooms/Select',
  discountCode: 'THANKYOU',
  discountLabel: '-10 %',
} as const;
