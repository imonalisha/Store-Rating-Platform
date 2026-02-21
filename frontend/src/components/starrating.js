import React, { useState } from 'react';

const StarRating = ({ initialRating, onRate }) => {
  const [rating, setRating] = useState(initialRating);

  const handleClick = (val) => {
    setRating(val);
    onRate(val); // Calls API to save rating [cite: 53]
  };

  return (
    <div>
      {[1, 2, 3, 4, 5].map((star) => (
        <span 
          key={star} 
          style={{ cursor: 'pointer', color: star <= rating ? 'gold' : 'gray' }}
          onClick={() => handleClick(star)}
        >
          ★
        </span>
      ))}
    </div>
  );
};