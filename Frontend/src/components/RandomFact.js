import React, { useState, useEffect } from "react";
// import SaveFunButton from "./SaveFunButton";
// import FunFavoritesButton from "./FunFavoritesButton";
// import FunFavoritesList from "./FunFavoriteList";

export default function RandomFact() {
  const [randomFact, setRandomFact] = useState();

  useEffect(() => {
    const fetchFunFact = async () => {
      const response = await fetch(
        "https://official-joke-api.appspot.com/random_joke"
      );
      const data2 = await response.json();
      setRandomFact(data2);
    };

    fetchFunFact();
  }, []); // Empty dependency array ensures this effect runs only once after initial render

  return (
    <div>
      {randomFact && (
        <>
          <img
            src="./images/AdobeStock_689694687.jpeg"
            alt="funPic"
            style={{ width: 900, height: 500 }}
          />
          <p>{/* {randomFact.category} {randomFact.subcategory} */}</p>
          <p>
            {randomFact.setup}
            <p></p>
            {randomFact.punchline}
          </p>
          {/* <SaveFunButton imageData={imageData} />
          <FunFavoritesButton setFavorites={setFavorites} />
          <p></p>
          <FunFavoritesList favorites={favorites} /> */}
        </>
      )}
    </div>
  );
}
