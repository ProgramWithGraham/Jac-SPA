import logo from "./logo.svg";
import "./App.css";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import DailyImage from "./DailyImage";
import FavoritesButton from "./components/FavoritesButton";
import FavoritesList from "./components/FavoriteList";
import SaveButton from "./components/SaveButton";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  const [saveFact, setExplanation] = useState();
  const [dailyImage, setDailyImage] = useState();
  const [favorites, setFavorites] = useState([]);

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
                <li>
                  <SaveButton fact={saveFact} />
                </li>
                <li>
                  <FavoritesButton setFavorites={setFavorites} />
                </li>
                <li>
                  <DailyImage setExplanation={setExplanation} />
                </li>
                <li>
                  <FavoritesList favorites={favorites} />
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
          {/* <Route path="/dailyImage" element={<DailyImage />} /> */}
        </Routes>
      </Router>
      <p>{saveFact}</p>
      <footer />
    </div>
  );
}

export default App;
