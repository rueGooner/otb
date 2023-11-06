import React from 'react';

interface DateDurationProps {
  when: string;
  duration: string;
}

export const DateDuration = ({ when, duration }: DateDurationProps) => {
  return (
    <p data-testid="date-duration" className='text-sm font-light'>
      <strong>{when}</strong>
      &nbsp;for <strong>{duration}</strong>
    </p>
  );
};
