import React from 'react';
import { render } from '@testing-library/react';
import { DateDuration } from './DateDuration';

describe('<DateDuration /> Component', () => {
  it('renders the provided date and duration', () => {
    const when = 'November 6, 2023';
    const duration = '3 days';
    const { getByTestId, getByText } = render(<DateDuration when={when} duration={duration} />);
    
    const dateElement = getByText(when);
    const durationElement = getByText(duration);
    
    expect(getByTestId('date-duration')).toBeInTheDocument();
    expect(dateElement).toBeInTheDocument();
    expect(durationElement).toBeInTheDocument();
    expect(getByTestId('date-duration')).toContainElement(dateElement);
    expect(getByTestId('date-duration')).toContainElement(durationElement);
  });
});
