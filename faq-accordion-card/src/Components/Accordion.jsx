import React, { useState } from "react";
import { data } from "./data";
import Faq from "./Faq";
import "./Accordion.css";

function Accordion() {
  return (
    <>
      <div className="card">
        <div className="left">
          <img
            className="girl"
            src="/images/illustration-woman-online-desktop.svg"
            alt=""
          />
          <img
            className="box"
            src="/images/illustration-box-desktop.svg"
            alt=""
          />
        </div>
        <div className="right">
          <div className="faq-sec">
            <div className="title">FAQ</div>
            <div className="faq-box">
              {data.map((item) => {
                return <Faq item={item} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Accordion;
