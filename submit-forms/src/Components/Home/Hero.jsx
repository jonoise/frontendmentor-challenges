import React from "react";
import Lottie from "react-lottie-player";
import animationData from "./Lotties/24094-7.json";

function Hero() {
  return (
    <section className="home">
      <div className="container">
        <div className="home__content">
          <div className="home__left-box">
            <div className="head mb-3">
              <h3 className="pseudo-title mb-2">
                Poke around and discover{" "}
                <span className="formatted">Submit</span>
              </h3>
              <h1 className="head-title">
                Give your forms the benefit to look modern, beautiful and
                functional.
              </h1>
            </div>
            <div className="body">
              <p className="body-text mb-2">
                The purpose of this website it's to showcase some of the forms
                I've developed in my journey to become a Front-End developer.
                You can find more information by clicking the buttons below or
                by just playing around with the website.
              </p>
            </div>
            <div className="cta-box">
              <button className="btn btn-secondary">Show me forms</button>
              <button className="btn btn-outline second-btn">
                Design Process
              </button>
            </div>
          </div>
          <div className="home__right-box">
            <div className="animation-box">
              <Lottie
                animationData={animationData}
                play
                loop
                className="lottie-1"
              />
            </div>
            <h3 className="lottie-text">
              Discover the designs, the purpose of the website and more
              information about me in the navbar.
            </h3>
          </div>
        </div>
      </div>
      <div className="clouds">
        <img src="./images/clouds.svg" alt="" />
      </div>
    </section>
  );
}

export default Hero;
