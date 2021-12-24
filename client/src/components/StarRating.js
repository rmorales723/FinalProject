import React, { useState } from "react";
// import "../css/App.css";

const Star = ({ selected = false, onClick = (f) => f }) => (
  <div className={selected ? "star selected" : "star"} onClick={onClick} />
);

const StarRating = ({
  totalStars,
  currentRating,
  setCurrentRating,
  clientId,
}) => {
  const [starsSelected, selectStar] = useState(currentRating);

  function updateClientRating(selectedRating) {
    const data =  { client: { rating: selectedRating } };

    fetch(`http://localhost:4000/clients/${clientId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((client) => {
        selectStar(client.rating);
        setCurrentRating(client.rating);
      });
  }

  return (
    <div className='star-rating'>
      {[...Array(totalStars)].map((n, i) => (
        <Star
          key={i}
          selected={i < starsSelected}
          onClick={() => updateClientRating(i + 1)}
        />
      ))}
      <p>
        {starsSelected} of {totalStars} stars
      </p>
    </div>
  );
};

export default StarRating;
