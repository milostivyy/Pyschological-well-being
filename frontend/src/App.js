import React from "react";
import { Route, NavLink, HashRouter, Routes } from "react-router-dom";
import Home from "./components/Home";
import Info from "./components/Info";
import Fun from "./components/Fun";
import Question from "./components/Question";
import "./App.css";
import myImage from "../src/assets/myImage.png";

function App() {
  return (
    <HashRouter>
      <div>
        <nav className="navbar">
          <div className="navbar-brand">
            <img className="navbar-image" src={myImage} alt="My Image" />
            <a href="/" className="navbar-logo">
              HelpWe
            </a>
          </div>
          <ul className="navbar-menu">
            <li className="navbar-item">
              <NavLink className="navbar-link" to="/">
                Pshychotherapy
              </NavLink>
            </li>
            <li className="navbar-item">
              <NavLink className="navbar-link" to="/info">
                Self-Care
              </NavLink>
            </li>
            <li className="navbar-item">
              <NavLink className="navbar-link" to="/fun">
                Science
              </NavLink>
            </li>
          </ul>
          <NavLink className="selftest" to="/question">
            Do our Self-Test
          </NavLink>
        </nav>
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/info" element={<Info />} />
            <Route path="/fun" element={<Fun />} />
            <Route path="/question" element={<Question />} />
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
