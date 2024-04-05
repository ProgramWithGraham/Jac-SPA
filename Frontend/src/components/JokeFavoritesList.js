import React from "react";

function JokeFavoritesList({ jokeFavorites }) {
  return (
    <ul>
      {jokeFavorites.map((each) => (
        <li>
          <p>
            ===================================================================
          </p>
          <p></p>
          {each.setup}
          {each.punchline}
        </li>
      ))}
    </ul>
  );
}

export default JokeFavoritesList;
