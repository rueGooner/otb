import React from 'react'

export const BookingButton = ({
  price
}: {
  price: number
}) => {
  console.log(price);
  
  return (
    <button type='button' data-testid='book-now-button' className='w-full flex flex-col items-center justify-center text-blue-800 bg-yellow-300 rounded-sm p-1 mt-auto'>
     <span className='text-[10px]'>Book Now</span>
     <span className='text-sm font-bold'>£{price.toFixed(2)}</span>
    </button>
  )
}
