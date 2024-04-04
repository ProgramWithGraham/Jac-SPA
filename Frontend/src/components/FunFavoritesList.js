import React from "react";

function FunFavoritesList({ funFavorites }) {
  return (
    <ul>
      {funFavorites.map((each) => (
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

export default FunFavoritesList;
