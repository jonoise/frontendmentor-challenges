import React, { useEffect, useState } from "react";
import FeaturedPosts from "./FeaturedPosts/FeaturedPosts";
import PostsCards from "./Posts/PostsCards";
// import PostFilter from "./PostFilter/PostFilter";

function Blog() {
  const url = "http://localhost:8000/api/posts/";
  // const url = "https://secret-scrubland-96747.herokuapp.com/api/posts/";

  // const [allPosts, setAllPosts] = useState([]);
  const [featPosts, setFeatPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch(url);
      const data = await res.json();
      // setAllPosts(data);
      setFilteredPosts(data);
      setFeatPosts(data.filter((post) => post.featured === true));
    };
    fetchPosts();
  }, []);

  return (
    <div className="blog-content">
      <FeaturedPosts featPosts={featPosts} />
      {/* <PostFilter posts={allPosts} setFilteredPosts={setFilteredPosts} /> */}
      <PostsCards allPosts={filteredPosts} />
    </div>
  );
}

export default Blog;
