import React from "react";

function SaveFunButton({ saveFun }) {
  const saveFunFact = () => {
    fetch("http://localhost:8080/api/fun", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(saveFun),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        alert("Fact was saved as a favorite!");
      })
      .catch((error) => {
        console.error(
          "There was a problem saving these Fact:",
          error
        );
      });
  };

  return <button onClick={saveFunFact}>Save as Favorite</button>;
}

export default SaveFunButton;
