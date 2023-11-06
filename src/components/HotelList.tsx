import React, { useState } from 'react';
import { hotelsList } from '../data/hotelList';
import HotelCard from './HotelCard';
import { sortHotels } from '../utils/sort-hotels';

interface Button {
  text: string;
  sort: string;
}

const buttons: Button[] = [
  {
    text: 'alphabetically',
    sort: 'name',
  },
  {
    text: 'price',
    sort: 'price',
  },
  {
    text: 'star rating',
    sort: 'rating',
  },
];

export default function HotelList() {
  const [hotels, setHotels] = useState(hotelsList);
  const [sortBy, setSortBy] = useState('price');

  const handleSortChange = (newSortBy: string) => {
    setSortBy(newSortBy);

    const sortedHotels = sortHotels(hotels, newSortBy);
    setHotels(sortedHotels);
  };

  return (
    <div className="flex justify-between" data-testid="hotel-list">
      <div className="w-1/4">
        {buttons.map((button, index) => {
          return (
            <button
              key={index}
              type="button"
              onClick={() => handleSortChange(button.sort)}
              className={`appearance-none bg-white text-blue-800 rounded-none w-full border-b border-b-blue-800 text-left text-sm ${
                index === buttons.length - 1 && 'border-b-transparent'
              } ${sortBy === button.sort && 'bg-blue-800 text-white'}`}
            >
              {index === 0 ? 'sort' : 'sort by'} <strong>{button.text}</strong>
            </button>
          );
        })}
      </div>
      <ul className="w-3/4 ml-12">
        {hotels.map((hotel, index) => (
          <HotelCard hotel={hotel} index={index} key={index} />
        ))}
      </ul>
    </div>
  );
}
