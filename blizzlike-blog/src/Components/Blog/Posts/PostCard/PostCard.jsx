import React from "react";
import PostCardText from "./PostCardText";
import { Link } from "react-router-dom";
import "./PostCard.css";

function Post({ data }) {
  const { id, title, body, img_url, publish_date } = data;

  return (
    <div className="upward-card">
      <div className="postcard-img">
        <img src={img_url} alt="" />
      </div>
      <div className="postcard-content">
        <h1 className="postcard-title">{title}</h1>
        <div className="postcard-body">
          <PostCardText body={body} date={publish_date} />
          <div className="postcard-cta">
            <Link to={`posts/${id}`}>
              <button
                className={
                  id % 2 === 0 ? "btn btn-secondary" : "btn btn-primary"
                }
              >
                Take me there!
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="divider"></div>
    </div>
  );
}

export default Post;
