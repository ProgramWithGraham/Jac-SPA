import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import DailyImage from "./components/DailyImage";
import FavoritesButton from "./components/FavoritesButton";
import FavoritesList from "./components/FavoriteList";
import SaveButton from "./components/SaveButton";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import SecondAPI from "./pages/SecondAPI";
import ThirdAPI from "./pages/ThirdAPI";
import setFavorites from "./components/FavoritesButton";
import setExplanation from "./components/DailyImage";
import favorites from "./components/FavoriteList";

function App() {
  const [dailyImage, setDailyImage] = useState();

  return (
    <div className="container">
      <Router>
        <header>
          <div>
            <nav className="nav">
              <ul>
                <li>
                  <Link to="/" className="site-title">
                    AstroKids Adventures
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/DailyImage">NASA DAILY IMAGE</Link>
                </li>
                <li>
                  <Link to="SecondAPI">SECOND API</Link>
                </li>
                <li>
                  <Link to="ThirdAPI">THIRD API</Link>
                </li>
                <li>
                  <Link to="/About">ABOUT</Link>
                </li>
                <li>
                  <Link to="/Contact">CONTACT</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/DailyImage" element={<DailyImage />} />
          <Route path="/SecondAPI" element={<SecondAPI />} />
          <Route path="/ThirdAPI" element={<ThirdAPI />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <FavoritesButton setFavorites={setFavorites} />
        <DailyImage set={setExplanation} />
        <FavoritesList favorites={favorites} />
      </Router>
      <footer class="copyright">Ctrl Alt Elite Copyright &copy; 2024</footer>
    </div>
  );
}
export default App;
