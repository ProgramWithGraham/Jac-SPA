import React from "react";

function DailyImageButton({ setDailyImage }) {
  const fetchDailyImage = () => {

    fetch("https://apod.nasa.gov/apod/ap240325.html")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setDailyImage(data.value);
      })
      .catch((error) => {
        console.error("There was a problem fetching the daily image:", error);
      });
  };


  return <button onClick={fetchDailyImage}>Get Daily Image</button>;
}


export default DailyImageButton.js;