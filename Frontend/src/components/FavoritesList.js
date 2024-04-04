import React from "react";

function FavoritesList({ favorites }) {
  return (
    <ul>
      {favorites.map((each) => (
        <li>
          <p>
            ===================================================================
          </p>
          <img
            src={each.url}
            alt="daily input from NASA"
            style={{ width: 400, height: 400 }}
          />
          <p></p>
          {each.date}
          {each.title} {each.explanation}
        </li>
      ))}
    </ul>
  );
}

export default FavoritesList;
