import React, { useState, useEffect } from "react";
import SaveFavoriteJokeButton from "./SaveFavoriteJokeButton";
import FavoriteJokeButton from "./FavoriteJokeButton";
import JokeFavoritesList from "./JokeFavoritesList";

export default function RandomJoke() {
  const [randomJoke, setRandomJoke] = useState("");
  const [jokeFavorites, setFavoriteJoke] = useState([]);

  useEffect(() => {
    const fetchRandomJoke = async () => {
      const response = await fetch(
        "https://official-joke-api.appspot.com/random_joke"
      );
      const data = await response.json();
      setRandomJoke(data);
    };

    fetchRandomJoke();
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
          <p>{randomJoke.setup}</p>
          <p>
            Punchline:
            {randomJoke.punchline}
          </p>
          <SaveFavoriteJokeButton randomJoke={randomJoke} />
          <FavoriteJokeButton setFavoriteJoke={setFavoriteJoke} />
          <p></p>
          <JokeFavoritesList jokeFavorites={jokeFavorites} />
        </>
      )}
    </div>
  );
}
