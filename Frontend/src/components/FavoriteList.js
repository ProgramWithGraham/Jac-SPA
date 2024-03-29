import React from "react";

function FavoritesList({ favorites }) {
  return (
    <ul>
      {favorites.map((each) => (
        <li key={each.date}>
          {each.explanation}
          {each.hdurl}
          {each.mediaType}
          {each.title}
          {each.url}
        </li>
      ))}
    </ul>
  );
}

export default FavoritesList;
