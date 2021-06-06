import React from "react";

function FeatPostSmall({ post }) {
  return post ? (
    <div className="feat-post-small">
      <div className="feat-post-small-card">
        <img src={post.img_url} alt="" />
        <p className="feat-post-title-small">{post.title}</p>
        <p className="feat-post-desc-small">{post.body.slice(0, 40)}</p>
      </div>
    </div>
  ) : (
    ""
  );
}

export default FeatPostSmall;
