import React from "react";

function DailyImageButton({ setDailyImage }) {
  const fetchDailyImage = () => {

    fetch("https://api.nasa.gov/#:~:text=https%3A//api.nasa.gov/planetary/apod%3Fapi_key%3DDEMO_KEY/SAJF3WueHZsrUhnD47Ikt8PaZu800EOw6VMlVxvE")
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


export default DailyImageButton;