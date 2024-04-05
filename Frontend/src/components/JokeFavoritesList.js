import React from "react";

function JokeFavoritesList({ jokeFavorites }) {
  return (
    <ul>
      {jokeFavorites.map((each) => (
        <li>
          <p>
            ===================================================================
          </p>
          <p>{each.setup}</p>
          <p> Punchline :{each.punchline}</p>
        </li>
      ))}
    </ul>
  );
}

export default JokeFavoritesList;
