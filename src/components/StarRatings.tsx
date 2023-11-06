import React from 'react'

interface StarRatingProps {
  stars: number
}

export const StarRating = ({
  stars
}: StarRatingProps) => {
  const limitedStars = Math.min(stars, 5); 
  return (
    <div className="star-rating">
      {[...Array(limitedStars)].map((star, starIndex) => {      
        return (         
          <span className="text-amber-300" key={starIndex}>&#9733;</span>        
        );
      })}
    </div>
  );
};
