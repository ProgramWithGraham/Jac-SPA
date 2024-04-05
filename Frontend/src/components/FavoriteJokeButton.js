import React from "react";

function FavoriteJokeButton({ setFavoriteJoke }) {
  const fetchFavoriteJoke = () => {
    fetch("http://localhost:8080/api/fun")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setFavoriteJoke(data);
      })
      .catch((error) => {
        console.error("There was a problem fetching favorite joke:", error);
      });
  };
  return <button onClick={fetchFavoriteJoke}>Show favorite joke</button>;
}

export default FavoriteJokeButton;
