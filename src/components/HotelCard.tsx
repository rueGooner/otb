import React, { useState } from 'react';
import { Hotel } from '../data/hotelList';
import { StarRating } from './StarRatings';
import { BasedOn } from './BasedOn';
import { DateDuration } from './DateDuration';
import { FlyingFrom } from './FlyingFrom';
import { BookingButton } from './BookingButton';
import { HotelDescription } from './HotelDescription';

interface HotelCardProps {
  index: number;
  hotel: Hotel;
}

export default function HotelCard({
  index,
  hotel,
}: HotelCardProps): JSX.Element {
  const [readMore, setReadMore] = useState(false);

  return (
    <li
      key={index}
      data-testid="hotel-card"
      className="flex bg-white text-gray-800 mb-5 shadow-sm flex-col"
    >
      <div className="flex">
        <div className="w-3/5">
         <div className="relative">
         <img src={`/src/assets/${hotel.image}`} />
          <button
            className="absolute bottom-0 left-0 bg-white rounded-none text-sm text-blue-800"
            type="button"
            onClick={() => setReadMore(!readMore)}
          >
            Read {readMore ?'less': 'more'} about this hotel
          </button>
         </div>
        </div>
        <div className="text-left p-4 w-2/5 flex flex-col">
          <h3 className="text-lg font-bold text-blue-600">{hotel.name}</h3>
          <p className="text-gray-500 text-sm">{hotel.location}</p>
          <StarRating stars={hotel.stars} />
          <BasedOn {...hotel} />
          <DateDuration {...hotel} />
          <FlyingFrom departing={hotel.departing} />
          <BookingButton price={hotel.price} />
        </div>
      </div>
      {readMore && <HotelDescription content={hotel.description} />}
      {/* Add more details here */}
    </li>
  );
}
