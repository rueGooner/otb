// eslint-disable-next-line no-unused-vars
import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import HotelList from './HotelList'
import { hotelsList } from '../data/hotelList'

describe('<HotelList />', () => {
  it('component to render correctly in the document', () => {
    render(<HotelList />)
    expect(screen.getByTestId('hotel-list')).toBeInTheDocument()
  })

  it('to render the right amount of hotels', () => {
    render(<HotelList />)
    expect(screen.getAllByTestId('hotel-card')).toHaveLength(hotelsList.length)
  })
})