export interface Hotel {
  name: string;
  location: string;
  image: string;
  stars: number;
  adults: number;
  children: number;
  infants: number;
  when: string;
  duration: string;
  departing: string;
  price: number;
  description: string;
}

export const hotelsList: Hotel[] = [
  {
    name: 'Iberostar Grand Salome',
    location: 'Costa Adeje, Tenerife',
    image: 'hotel-image-1.png',
    stars: 1,
    adults: 2,
    children: 2,
    infants: 1,
    when: '3rd July 2019',
    duration: '7 days',
    departing: 'East Midlands',
    price: 1136.50 as number, 
    description:
      'The Iberostar Grand Salome has an exceptional location in the south of Tenerife, overlooking the Atlantic Ocean. It is situated between the Gold del Sur and the Amarillo Golf courses, and is an ideal hotel for families, couples, and groups who are looking for a holiday full of sport, sun, and sea.',
  },
  {
    name: 'Aguamarina Golf Hotel',
    location: 'Costa Adeje, Tenerife',
    image: 'hotel-image-2.png',
    stars: 4,
    adults: 2,
    children: 1,
    infants: 0,
    when: '27th May 2019',
    duration: '7 days',
    departing: 'Liverpool',
    price: 696.80 as number, 
    description:
      "This hotel did not come with a description, so I've made one up on my own and inserted it into this field.",
  },
  {
    name: 'Another Hotel',
    location: 'Someplace, Somewhere',
    image: 'hotel-image-3.png',
    stars: 3,
    adults: 2,
    children: 1,
    infants: 0,
    when: '1st August 2019',
    duration: '5 days',
    departing: 'London',
    price: 450.75, 
    description:
      'A newly added hotel with a great location and fantastic amenities for a memorable vacation.',
  },
  {
    name: 'Seaside Resort',
    location: 'Beautiful Beach Town',
    image: 'hotel-image-1.png',
    stars: 2,
    adults: 3,
    children: 2,
    infants: 1,
    when: '15th September 2019',
    duration: '10 days',
    departing: 'Manchester',
    price: 920,
    description:
      'Enjoy a wonderful seaside experience in our resort with stunning views and exciting activities for the whole family.',
  },
];
