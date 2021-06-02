import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <header className="navbar flex">
      <div className="nav-container flex space-between">
        <div className="logo-container">
          <img src="./images/nav-logo.svg" alt="" />
        </div>

        <div onClick={handleClick} className="nav-icon">
          {click ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={click ? "nav-items active" : "nav-items"}>
          <li className="nav-item">
            <Link className="nav-link">Forms</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link">Design</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link">Know+</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
