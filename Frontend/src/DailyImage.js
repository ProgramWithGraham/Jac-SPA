import React, { useState, useEffect } from "react";

export default function DailyImage() {
  const [url, setUrl] = useState("");
  const [explanation, setExplanation] = useState("");

  useEffect(() => {
    const fetchDailyImage = async () => {
      const randomDate = getRandomDate(startDate, endDate);
      const formattedDate = formatDate(randomDate);
      const response = await fetch(
        "https://api.nasa.gov/planetary/apod?api_key=SAJF3WueHZsrUhnD47Ikt8PaZu800EOw6VMlVxvE&date=" +
          formattedDate
      );
      const data = await response.json();
      setUrl(data.url);
      setExplanation(data.explanation);
    };

    fetchDailyImage();
  }, []); // Empty dependency array ensures this effect runs only once after initial render

  return (
    <div>
      <img
        src={url}
        alt="daily input from NASA"
        style={{ width: 900, height: 500 }}
      />
      <p>{explanation}</p>
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
