import React from "react";
import FeatPostBig from "./FeatPostBig";
import FeatPostSmall from "./FeatPostSmall";
import "./FeaturedPosts.css";

function FeaturedPosts({ featPosts }) {
  const [p1, p2, p3] = featPosts;
  return (
    <div className="feat-posts">
      <div className="big-feat-column">
        <FeatPostBig post={p1} />
      </div>
      <div className="small-feat-column">
        <div className="small-frame">
          <FeatPostSmall post={p2} />
        </div>
        <div className="small-frame">
          <FeatPostSmall post={p3} />
        </div>
      </div>
    </div>
  );
}

export default FeaturedPosts;
