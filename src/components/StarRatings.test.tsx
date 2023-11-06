import React from 'react';
import { render } from '@testing-library/react';
import { StarRating } from './StarRatings';

describe('<StarRating /> Component', () => {
  it('renders the correct number of stars', () => {
    const { container } = render(<StarRating stars={3} />);
    const stars = container.querySelectorAll('.star-rating span');
    
    expect(stars.length).toBe(3);
  });

  it('renders no stars when stars prop is 0', () => {
    const { container } = render(<StarRating stars={0} />);
    const stars = container.querySelectorAll('.star-rating span');
    
    expect(stars.length).toBe(0);
  });

  it('renders 5 stars when stars prop is greater than 5', () => {
    const { container } = render(<StarRating stars={6} />);
    const stars = container.querySelectorAll('.star-rating span');
    
    expect(stars.length).toBe(5);
  });

  it('renders the correct star character', () => {
    const { container } = render(<StarRating stars={4} />);
    const stars = container.querySelectorAll('.star-rating span');

    stars.forEach((star) => {
      expect(star.textContent).toBe('★');
    });
  });
});
