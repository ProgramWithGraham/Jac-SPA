import logo from "./logo.svg";
import "./App.css";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import DailyImage from "./DailyImage";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  const [dailyImage, setDailyImage] = useState();

  return (
    <div className="App">
      <Router>
        <header>
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
                <li>
                  <Link to="/dailyImage">Nasa's Daily Image</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
          <Route path="/dailyImage" element={<DailyImage />} />
        </Routes>
      </Router>

      <footer />
    </div>
  );
}

export default App;
