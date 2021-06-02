import React from "react";
import "./Footer.css";
import Flags from "country-flag-icons/react/3x2";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer__component flex column">
      <div className="container">
        <div className="footer__card">
          <ul className="footer-items">
            <li></li>
            <li className="footer-item">
              <Link to="/forms" className="footer-link">
                Forms
              </Link>
            </li>
            <li className="footer-item">
              <Link to="/design" className="footer-link">
                Design
              </Link>
            </li>
            <li className="footer-item">
              <Link to="/know-me" className="footer-link">
                Know+
              </Link>
            </li>
          </ul>
          <div className="footer-made-by">
            <h4>
              Made in <Flags.CR title="Costa Rica" className="footer__flag" />{" "}
              by Amilkar Munoz
            </h4>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
