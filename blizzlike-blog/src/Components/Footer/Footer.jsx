import React from "react";
import { Link } from "react-router-dom";
import { DiReact, DiDjango } from "react-icons/di";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <ul className="footer-nav-items">
          <li className="footer-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="foter-item">
            <Link to="/blog" className="nav-link">
              Blog
            </Link>
          </li>
          <p className="footer-made-by">
            Made with <DiReact className="react-icon-footer" />
            <span className="React-text">React</span> and
            <DiDjango className="django-icon-footer" /> by{"       "}
            <a
              href="https://github.com/soloamilkar"
              target="_blank"
              className="footer-link"
              rel="noopener noreferrer"
            >
              this guy.
            </a>
          </p>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
