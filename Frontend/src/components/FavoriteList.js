import React from "react";

function FavoritesList({ favorites }) {
  return (
    <ul>
      {favorites.map((each) => (
        <li key={each.hdurl}>{each.explanation}</li>
      ))}
    </ul>
  );
}

export default FavoritesList;
