import logo from "./logo.svg";
import "./App.css";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import DailyImageButton from "./components/DailyImageButton";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  const [dailyImage, setDailyImage] = useState();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                {" "}
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
      <DailyImageButton setDailyImage={setDailyImage} />
      <img src={dailyImage} alt="NASA" style={{ width: 50, height: 50 }} />
      <footer />
    </div>
  );
}

export default App;
