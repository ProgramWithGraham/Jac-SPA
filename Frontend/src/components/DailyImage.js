import React, { useState, useEffect } from "react";
import SaveButton from "./SaveButton";
import FavoritesButton from "./FavoritesButton";
import FavoritesList from "./FavoriteList";
// import FindByDateButton from "./FindByDateButton";

export default function DailyImage() {
  const [imageData, setImageData] = useState(null);
  const [favorites, setFavorites] = useState([]);
  // const [date, setFindByDateButton] = useState([]);

  useEffect(() => {
    const fetchDailyImage = async () => {
      const randomDate = getRandomDate(startDate, endDate);
      const formattedDate = formatDate(randomDate);
      const response = await fetch(
        "https://api.nasa.gov/planetary/apod?api_key=SAJF3WueHZsrUhnD47Ikt8PaZu800EOw6VMlVxvE&date=" +
          formattedDate
      );
      const data = await response.json();
      setImageData(data);
    };

    fetchDailyImage();
  }, []); // Empty dependency array ensures this effect runs only once after initial render

  return (
    <div>
      {imageData && (
        <>
          <img
            src={imageData.url}
            alt="daily input from NASA"
            style={{ width: 900, height: 500 }}
          />
          <p>
            {imageData.date} {imageData.title}
          </p>
          <p>{imageData.explanation}</p>
          <SaveButton imageData={imageData} />
          <FavoritesButton setFavorites={setFavorites} />
          <p></p>
          <FavoritesList favorites={favorites} />
          {/* <FindByDateButton findByDateButton ={date} /> */}
        </>
      )}
    </div>
  );
}

// Define startDate and endDate
const startDate = new Date(2020, 0, 1); // January 1, 2020
const endDate = new Date(); // Current date

// Function to generate a random date
function getRandomDate(startDate, endDate) {
  // Convert input dates to milliseconds
  const startMillis = startDate.getTime();
  const endMillis = endDate.getTime();

  // Calculate a random timestamp between the start and end dates
  const randomMillis = startMillis + Math.random() * (endMillis - startMillis);

  // Create a new Date object using the random timestamp
  const randomDate = new Date(randomMillis);

  return randomDate;
}

// Function to format a date as "yyyy-mm-dd"
function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return year + "-" + month + "-" + day;
}
