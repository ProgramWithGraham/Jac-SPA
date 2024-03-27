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
  fetchDailyImage() {
    fetch(
      "https://api.nasa.gov/planetary/apod?api_key=SAJF3WueHZsrUhnD47Ikt8PaZu800EOw6VMlVxvE"
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
    this.fetchDailyImage();
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
