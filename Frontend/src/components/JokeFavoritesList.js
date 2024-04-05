import React from "react";

function JokeFavoritesList({ jokeFavorites }) {
  return (
    <ul>
      {jokeFavorites.map((each) => (
        <li key={each.setup}>{each.punchline}</li>
      ))}
    </ul>
  );
}

export default JokeFavoritesList;
