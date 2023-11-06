import React from 'react';
import { render } from '@testing-library/react';
import { FlyingFrom } from './FlyingFrom'; 

describe('<FlyingFrom /> Component', () => {
  it('renders the departing location', () => {
    const departing = 'New York';
    const { getByTestId, getByText } = render(<FlyingFrom departing={departing} />);
    
    const departingElement = getByTestId('departing-from');
    const strongElement = getByText(departing);
    
    expect(departingElement).toBeInTheDocument();
    expect(strongElement).toBeInTheDocument();
    expect(departingElement).toContainElement(strongElement);
  });
});
