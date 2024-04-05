import React from "react";

function JokeFavoritesList({ jokeFavorites }) {
  return (
    <ul>
      {jokeFavorites.map((each) => (
        <li>
          <p>
            =====================================================================
          </p>
          <p class="jokesetup">{each.setup}</p>
          <p class="jokesetup">{each.punchline}</p>
        </li>
      ))}
    </ul>
  );
}

export default JokeFavoritesList;
