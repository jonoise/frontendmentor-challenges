import React from "react";
import data from "../forms_data";

function F1Info() {
  // This form information is stored in the data array at position 0.
  const formInfo = data[0];
  const { added, colors, theme, title, type, desc, style } = formInfo;
  return (
    <>
      <div className="form-info-title">
        <h1>Form Info</h1> <small className="form-added">added: {added}</small>
      </div>
      <div className="info-content">
        <div className="info-element">
          <p>
            <span className="info-element-title">Title: </span>
            {title}
          </p>
        </div>
        <div className="info-element">
          <p>
            <span className="info-element-title">Description: </span>
            {desc}
          </p>
        </div>
        <div className="info-element">
          <p>
            <span className="info-element-title">Type: </span>
            {type}
          </p>
        </div>
        <div className="info-element">
          <p>
            <span className="info-element-title">Style: </span>
            {style}
          </p>
        </div>
        <div className="info-element">
          <p>
            <span className="info-element-title">Colors: </span>
            {colors}
          </p>
        </div>
        <div className="info-element">
          <p>
            <span className="info-element-title">Theme: </span>
            {theme}
          </p>
        </div>
      </div>
    </>
  );
}

export default F1Info;
