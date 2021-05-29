import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import "./Faq.css";

function Faq({ item }) {
  const [active, setActive] = useState(false);

  const handleActivation = () => {
    setActive(!active);
  };
  return (
    <div key={item.id} className="faq">
      <header>
        <h3 onClick={handleActivation} className="q-title">
          {item.question}
        </h3>
        {active ? (
          <button onClick={handleActivation} className="btn">
            <IoIosArrowUp className="arrow" />
          </button>
        ) : (
          <button onClick={handleActivation} className="btn">
            <IoIosArrowDown className="arrow" />
          </button>
        )}
      </header>
      {active ? <p className="answer">{item.answer}</p> : ""}
    </div>
  );
}

export default Faq;
