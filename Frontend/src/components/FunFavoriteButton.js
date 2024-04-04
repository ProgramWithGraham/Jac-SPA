import React from "react";

function FunFavoriteButton({ setRandomFact }) {
  const fetchRandomFact = () => {
    fetch("http://localhost:8080/api/fun")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setRandomFact(data.value);
      })
      .catch((error) => {
        console.error("There was a problem fetching the joke:", error);
      });
  };
  return <button onClick={fetchRandomFact}>Get Random Fact</button>;
}

export default FunFavoriteButton;
