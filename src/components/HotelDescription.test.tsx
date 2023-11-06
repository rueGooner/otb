import React from 'react';
import { render } from '@testing-library/react';
import { HotelDescription } from './HotelDescription'; 

describe('<HotelDescription /> Component', () => {
  it('renders the provided content', () => {
    const content = 'This is the hotel description.';
    const { getByText } = render(<HotelDescription content={content} />);
    
    expect(getByText('Overview')).toBeInTheDocument(); // Check if "Overview" is rendered
    expect(getByText(content)).toBeInTheDocument(); // Check if the provided content is rendered
  });
});
