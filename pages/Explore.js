import React, { useState, useEffect } from "react";

import Footer from "@/components/Footer";

import Post from "./Post";

const Explore = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch(
        "https://peerpost-api.vercel.app/post?page=0&limit=2"
      );
      const data = await response.json();
     
      setPosts(data);
      
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-row container mx-auto max-w-screen-xl p-5 overflow-hidden">
      <div className="rounded-3xl">
        {posts.map((post) => (
          <Post
            key={post.post_id}
            displayName={post.profile.handle}
            userName={post.profile.handle}
            text={post.profile.token_uri}
            avatar={post.profile.token_uri}
            image={post.profile.token_uri}
            timestamp={(Math.floor((Date.now() - (post.timetamp) * 1000) / (1000 * 60 * 60)))+"h"}
          />
        ))}
      </div>

      <div className="sr-only sm:not-sr-only">
        <Footer />
      </div>
    </div>
  );
};

export default Explore;
