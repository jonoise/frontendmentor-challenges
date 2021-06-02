import React from "react";

export default function Card({ data }) {
  const { id, title, text, color, emoji } = data;
  return (
    <div className="card_component" style={{ backgroundColor: color }}>
      <div className="card__left">
        <div className="card__title">
          <h1>{title}</h1>
        </div>
        <div className="card__body">
          <p>{text}</p>
        </div>
      </div>
      <div className="card__right">
        <div className="emoji">{emoji}</div>
      </div>
    </div>
  );
}
