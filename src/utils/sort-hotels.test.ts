import { Hotel } from '../data/hotelList';
import { sortHotels } from './sort-hotels';

describe('sortHotels Function', () => {
  const sampleHotels: Hotel[] = [
    {
      name: 'Hotel A',
      location: 'New York',
      image: 'hotel-a.jpg',
      stars: 4,
      adults: 2,
      children: 1,
      infants: 0,
      when: 'November 10, 2023',
      duration: '4 days',
      departing: 'New York',
      price: 150,
      description: 'A wonderful hotel in the heart of New York.',
    },
    {
      name: 'Hotel B',
      location: 'Los Angeles',
      image: 'hotel-b.jpg',
      stars: 3,
      adults: 2,
      children: 2,
      infants: 1,
      when: 'December 5, 2023',
      duration: '3 days',
      departing: 'Los Angeles',
      price: 120,
      description: 'Stay at our cozy hotel in sunny Los Angeles.',
    },
    {
      name: 'Hotel C',
      location: 'Miami',
      image: 'hotel-c.jpg',
      stars: 5,
      adults: 2,
      children: 0,
      infants: 0,
      when: 'October 15, 2023',
      duration: '5 days',
      departing: 'Miami',
      price: 200,
      description: 'Experience luxury in beautiful Miami.',
    },
  ];

  it('sorts hotels by price', () => {
    const sortedHotels = sortHotels([...sampleHotels], 'price');
    expect(sortedHotels[0].name).toBe('Hotel B');
    expect(sortedHotels[1].name).toBe('Hotel A');
    expect(sortedHotels[2].name).toBe('Hotel C');
  });

  it('sorts hotels by rating', () => {
    const sortedHotels = sortHotels([...sampleHotels], 'rating');
    expect(sortedHotels[0].name).toBe('Hotel C');
    expect(sortedHotels[1].name).toBe('Hotel A');
    expect(sortedHotels[2].name).toBe('Hotel B');
  });

  it('sorts hotels by name', () => {
    const sortedHotels = sortHotels([...sampleHotels], 'name');
    expect(sortedHotels[0].name).toBe('Hotel A');
    expect(sortedHotels[1].name).toBe('Hotel B');
    expect(sortedHotels[2].name).toBe('Hotel C');
  });

});
