import React from "react";

function FunFavoritesButton({ setFunFact }) {
  const fetchFunFact = () => {
    fetch("http://localhost:8080/api/fun")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setFunFact(data.value);
      })
      .catch((error) => {
        console.error("There was a problem fetching favorite facts:", error);
      });
  };
  return <button onClick={fetchFunFact}>Show favorite facts</button>;
}

export default FunFavoritesButton;
