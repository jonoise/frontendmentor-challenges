import React, { useState } from "react";
import validationManager from "./validationManager";
import F1 from "./F1";
import "./F1.css";

function F1Container() {
  const cleanMessage = Object.freeze({
    email: "",
    title: "",
    content: "",
    datetime: new Date(),
  });
  const cleanValidator = Object.freeze({
    email: false,
  });
  const [message, setMessage] = useState(cleanMessage);
  const [validator, setValidator] = useState(cleanValidator);

  const handleInputChange = (e) => {
    setMessage({ ...message, [e.target.name]: e.target.value });
    validationManager(e.target.name, e.target.value, validator, setValidator);
    console.log(`${e.target.name} current value: ${e.target.value}`);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (validator.email) {
      console.log(message);
      setMessage(cleanMessage);
    } else {
      return;
    }
  };

  return (
    <F1
      validator={validator}
      message={message}
      handleFormSubmit={handleFormSubmit}
      handleInputChange={handleInputChange}
    />
  );
}

export default F1Container;
