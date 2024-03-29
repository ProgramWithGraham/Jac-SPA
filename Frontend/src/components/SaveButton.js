import React from "react";

function SaveButton({ fact }) {
  const saveFact = () => {
    fetch("http://localhost:8080/api/nasa", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: fact }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        alert("fact was saved as favorite!");
      })
      .catch((error) => {
        console.error("There was a problem saving the fact:", error);
      });
  };

  return <button onClick={saveFact}>Save as Favorite</button>;
}

export default SaveButton;
