import React from "react";

function RandomFactButton({ setRandomFact }) {
  const fetchRandomFact = () => {
    fetch("http://api.fungenerators.com/fact/random?")
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

export default RandomFactButton;
