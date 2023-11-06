import React from 'react';

export const FlyingFrom = ({ departing }: { departing: string }) => {
  return (
    <p data-testid="departing-from" className="text-sm font-light pb-3">
      departing from <strong>{departing}</strong>
    </p>
  );
};
