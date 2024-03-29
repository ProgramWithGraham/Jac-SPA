import React from "react";

function FavoritesList({ favorites }) {
  return (
    <ul>
      {favorites.map((each) => (
        <li key={each.date}>{each.text}</li>
      ))}
    </ul>
  );
}

export default FavoritesList;
