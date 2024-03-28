import React from "react";
export default class DailyImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
      explanation: "",
    };
    this.fetchDailyImage = this.fetchDailyImage.bind(this);
  }

  fetchDailyImage(formattedDate) {
    fetch(
      "https://api.nasa.gov/planetary/apod?api_key=SAJF3WueHZsrUhnD47Ikt8PaZu800EOw6VMlVxvE&date=" +
        formattedDate
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          url: data.url,
          explanation: data.explanation,
        });
      });
  }

  componentDidMount() {
    const randomDate = getRandomDate(startDate, endDate);
    const formattedDate = formatDate(randomDate);
    this.fetchDailyImage(formattedDate);
  }

  render() {
    let url = this.state.url;
    let explanation = this.state.explanation;

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
