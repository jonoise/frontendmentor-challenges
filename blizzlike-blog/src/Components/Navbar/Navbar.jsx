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
    <header className={click ? "navbar bg-color flex" : "navbar flex"}>
      <div className="nav-container flex space-between">
        <Link to="/">
          <div className="logo-container">
            <img src="./images/wow-logo.png" alt="" />
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
            <Link to="/blog" className="nav-link">
              Blog
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
