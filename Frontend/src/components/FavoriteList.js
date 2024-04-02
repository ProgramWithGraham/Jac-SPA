import React from "react";

function FavoritesList({ favorites }) {
  return (
    <ul>
      {favorites.map((each) => (
        <li>
        <li key={each.date}>{each.explanation}</li>

          <img
            src={each.url}
            alt="daily input from NASA"
            style={{ width: 400, height: 400 }}
          />
        </li>
      ))}
    </ul>
  );
}

export default FavoritesList;
