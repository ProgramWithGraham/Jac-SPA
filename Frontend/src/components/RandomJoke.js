import React, { useState, useEffect } from "react";
import SaveFavoriteJokeButton from "./SaveFavoriteJokeButton";
import FavoriteJokeButton from "./FavoriteJokeButton";
import JokeFavoritesList from "./JokeFavoritesList";

export default function RandomJoke() {
  const [randomJoke, setRandomJoke] = useState(null);
  const [jokeFavorites, setJokeFavorites] = useState([]);

  useEffect(() => {
    const fetchFavoriteJoke = async () => {
      const response = await fetch(
        "https://official-joke-api.appspot.com/random_joke"
      );
      const data = await response.json();
      setRandomJoke(data);
    };

    fetchFavoriteJoke();
  }, []); // Empty dependency array ensures this effect runs only once after initial render

  return (
    <div>
      {randomJoke && (
        <>
          <img
            src="./images/AdobeStock_689694687.jpeg"
            alt="science kids"
            style={{ width: 1300, height: 550 }}
          />
          <p>
            {randomJoke.setup}
            <p></p>
            <p>
              Punchline:
              {randomJoke.punchline}
            </p>
          </p>
          <SaveFavoriteJokeButton randomJoke={randomJoke} />
          <FavoriteJokeButton setFavoriteJoke={setJokeFavorites} />
          <p></p>
          <JokeFavoritesList jokeFavorites={jokeFavorites} />
        </>
      )}
    </div>
  );
}
