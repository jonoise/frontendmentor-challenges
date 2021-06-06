import React from "react";
import { Link } from "react-router-dom";

function FormEntry({ form }) {
  // This form information is stored in the data array at position 0.
  const { added, title, desc, id } = form;
  return (
    <div className="entry-content">
      <div className="box">
        <p className="background-number">{id}</p>
        <div className="entry-title">
          <h1>Form info</h1> <p className="entry-date">added: {added}</p>
        </div>
        <div className="entry-element">
          <p>
            <span className="entry-element-title">Title: </span>
            {title}
          </p>
        </div>
        <div className="entry-element">
          <p>
            <span className="entry-element-title">Description: </span>
            {desc}
          </p>
        </div>
        <Link to={`forms/${id}`}>
          <button className="btn btn-secondary">Ver</button>
        </Link>
      </div>
    </div>
  );
}

export default FormEntry;
