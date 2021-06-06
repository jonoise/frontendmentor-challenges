import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <video src="./images/video-bg.mov" muted loop autoPlay></video>
      <div className="hero-content">
        <div className="hero-left">
          <h2>El Burning Legion es peligroso.</h2>
          <h1>Un enemigo acecha tras una larga espera.</h1>
          <p className="hero-left-text">
            Todos los caminos llevan a Outland. Comienza a jugar con el parche
            preliminar de Burning Crusade y prepara a tu draenei o blood elf
            para la batalla. Cuando llegue el día tu y tus amigos lucharán hasta
            alcanzar el nivel 70 más allá del Portal Oscuro.
          </p>
          <div className="hero-btn-container">
            <button className="btn btn-secondary">Únete hoy</button>
            <button className="btn btn-primary">Descubre más</button>
          </div>
        </div>
        <div className="hero-right"></div>
      </div>
    </section>
  );
}

export default Hero;
