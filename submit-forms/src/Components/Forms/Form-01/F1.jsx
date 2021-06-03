import React from "react";
import F1Info from "./F1Info";
function F1({ validator, message, handleFormSubmit, handleInputChange }) {
  return (
    <div className="form__component flex">
      <div className="form-container">
        <div className="form__content">
          <div className="form__info">
            <F1Info />
          </div>
          <form className="form1" onSubmit={handleFormSubmit}>
            <h1 className="form-title">Contact</h1>
            <input
              value={message.email}
              onChange={handleInputChange}
              className="form-control"
              type="email"
              name="email"
              placeholder="Email"
            />
            {message.email ? (
              validator.email ? (
                <small className="flag green-flag">
                  Dirección de email válida.
                </small>
              ) : (
                <small className="flag red-flag">
                  Ingresa una dirección de email válida.
                </small>
              )
            ) : (
              ""
            )}
            <input
              value={message.title}
              onChange={handleInputChange}
              className="form-control"
              type="text"
              name="title"
              placeholder="Title"
              required={true}
            />

            <textarea
              value={message.content}
              onChange={handleInputChange}
              className="form-control"
              name="content"
              cols="30"
              rows="10"
              id="message"
              placeholder="Message"
              required={true}
            ></textarea>
            <button className="btn btn-form1" type="submit">
              Submit
            </button>
          </form>
        </div>
        <div className="code__container">
          <div className="code__block"></div>
          <div className="code__block"></div>
        </div>
      </div>
    </div>
  );
}

export default F1;
