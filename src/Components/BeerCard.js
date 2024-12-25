import React from "react";

const BeerCard = ({ beer }) => {
  return (
    <div className="beer-card">
      <img src={beer.image} alt={beer.name} />
      <h2>{beer.name}</h2>
      <p><strong>ABV:</strong> {beer.abv || "N/A"}%</p>
      <p>{beer.description || "No description available."}</p>
    </div>
  );
};

export default BeerCard;
