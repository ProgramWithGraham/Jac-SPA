import React from "react";

function SaveFavoriteJokeButton({ randomJoke }) {
  const saveFavoriteJoke = () => {
    fetch("http://localhost:8080/api/fun", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(randomJoke),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        alert("Joke was saved as a favorite!");
      })
      .catch((error) => {
        console.error("There was a problem saving this joke:", error);
      });
  };

  return <button onClick={saveFavoriteJoke}>Save as Favorite</button>;
}

export default SaveFavoriteJokeButton;
