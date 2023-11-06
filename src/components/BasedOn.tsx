import React from 'react';

interface BasedOnProps {
  adults: number;
  children: number;
  infants: number;
}

export const BasedOn = ({ adults, children, infants }: BasedOnProps) => {
  return (
    <p data-testid="holiday-based-on" className='font-light text-sm pt-1'>
      {<Renderer value={adults} plural="Adults" singular="Adult" />}
      {<Renderer value={children} plural="children" singular="child" />}
      {infants !== 0 && (
        <Renderer value={infants} plural="infants" singular="infant" />
      )}
    </p>
  );
};

const Renderer = ({
  value,
  plural,
  singular,
}: {
  value: number;
  plural: string;
  singular: string;
}) => {
  return (
    <>
      {value > 1 ? (
        <>
          <strong>{value}</strong> {plural}
        </>
      ) : (
        <>
          <strong>{value}</strong> {singular}
        </>
      )}
      &nbsp;
    </>
  );
};
