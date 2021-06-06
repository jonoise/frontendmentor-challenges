import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const closeNav = () => {
    setClick(false);
  };

  return (
    <header className="navbar flex">
      <div className="nav-container flex space-between">
        <Link to="/">
          <div className="logo-container">
            <img src="./images/nav-logo.svg" alt="" />
          </div>
        </Link>

        <div onClick={handleClick} className="nav-icon">
          {click ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={click ? "nav-items active" : "nav-items"}>
          <li onClick={closeNav} className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li onClick={closeNav} className="nav-item">
            <Link to="/forms" className="nav-link">
              Forms
            </Link>
          </li>
          <li onClick={closeNav} className="nav-item">
            <Link to="/design" className="nav-link">
              Design
            </Link>
          </li>
          <li onClick={closeNav} className="nav-item">
            <Link to="/know-me" className="nav-link">
              Know+
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
