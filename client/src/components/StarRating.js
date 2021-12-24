import React, { useState } from "react";
// import { render } from "react-dom";

const Star = ({ selected = false, onClick = f => f }) => (
  <div className={selected ? "star selected" : "star"} onClick={onClick} />
);

const DisplayStar = ({ selected = false }) => (
    <div className={selected ? "star selected" : "star"} />
);

const StarRating = ({ totalStars, currentRating, setRating, displayStar }) => {
  const [starsSelected, selectStar] = useState(currentRating);

  console.log(`starsSelected: ${starsSelected}`);

  function updateRating(selectedRating) {
    selectStar(selectedRating);
    setRating(selectedRating);
  }

  return (
    <div className="star-rating">
      {[...Array(totalStars)].map((n, i) => (
          displayStar ? (<DisplayStar
          key={i}
          selected={i < starsSelected}
        />) : (<Star
            key={i}
            selected={i < starsSelected}
            onClick={() => updateRating(i + 1)}
        />)
      ))}
      <p>
        {starsSelected} of {totalStars} stars
      </p>
    </div>
  );
};

export default StarRating;