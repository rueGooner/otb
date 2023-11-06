import React from 'react';

export const HotelDescription = ({ content }: { content: string }) => {
  return (
    <div className="flex flex-col p-5 text-left">
      <h3 className='text-blue-800 pb-3'>Overview</h3>
      <p className='text-sm'>{content}</p>
    </div>
  );
};
