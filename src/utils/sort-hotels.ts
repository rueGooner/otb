import { Hotel } from "../data/hotelList";

export function sortHotels(hotels: Hotel[], sortBy: string): Hotel[] {
  const sortedHotels = [...hotels]; // Create a copy of the original array to avoid mutation

  if (sortBy === 'price') {
    sortedHotels.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'rating') {
    sortedHotels.sort((a, b) => b.stars - a.stars);
  } else if (sortBy === 'name') {
    sortedHotels.sort((a, b) => a.name.localeCompare(b.name));
  }

  return sortedHotels;
}