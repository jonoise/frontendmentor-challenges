import React from "react";
import PostCard from "./PostCard/PostCard";

function Posts({ allPosts }) {
  return (
    <>
      <section className="postcards">
        {allPosts.map((post) => {
          return <PostCard key={post.id} data={post} />;
        })}
      </section>
    </>
  );
}

export default Posts;
