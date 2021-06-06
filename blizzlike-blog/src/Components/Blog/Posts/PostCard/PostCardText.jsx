import React, { useState } from "react";
import dateFormatter from "./../../../../Helpers/dateFormatter";
import "./PostCardText.css";

function PostCardBody({ body, date }) {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  let created = new Date(date);
  created = dateFormatter(created);
  return (
    <div className="postcard-text">
      <p>
        {showMore
          ? body.length < 300
            ? `${body}`
            : `${body.slice(0, 300)}...`
          : `${body.slice(0, 150)}...`}
      </p>
      <p className="show-more" onClick={handleShowMore}>
        {showMore ? "Ver menos" : "Leer más"}
      </p>
      <small className="created-text">
        {showMore ? "" : `Fecha: ${created}`}
      </small>
    </div>
  );
}

export default PostCardBody;
