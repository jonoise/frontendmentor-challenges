import React from "react";

function FeatPostCard({ post }) {
  return post ? (
    <div className="feat-post-big">
      <div className="feat-post-big-card">
        <img src={post.img_url} alt="" />
        <p className="feat-post-title">{post.title}</p>
        <p className="feat-post-desc">{post.body.slice(0, 120)}</p>
      </div>
    </div>
  ) : (
    ""
  );
}

export default FeatPostCard;
