import React from "react";
import { useRouteMatch, Link } from "react-router-dom";
import data from "./forms_data";
import "./Forms.css";
function Forms() {
  let { url } = useRouteMatch();
  return (
    <>
      <div className="forms__component flex column">
        <ul>
          {data.map((entry) => {
            const { id, title, type, text, added, style, theme, colors } =
              entry;
            return (
              <li>
                <h1>{title}</h1>
                <p>{text}</p>
                <h3>added: {added}</h3>
                <div className="moreinfo">
                  <h5>style: {style}</h5>
                  <h5>theme: {theme}</h5>
                  <h5>colors: {colors}</h5>
                  <h5>type: {type}</h5>
                </div>
                <Link to={`${url}/${id}`}>Ver</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Forms;
