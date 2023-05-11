import React, { useState,useEffect } from "react";

import Footer from "@/components/Footer";

import Post from "./Post";

const Explore = () => {
  const [timestamps, setTimestamps] = useState("")
  const [avtars, setAvtars] = useState("")


  useEffect(() => {
    PostDetails();
  }, []);
 
  
  
  const PostDetails = async () => {
    try {
      const data = await fetch("https://peerpost-api.vercel.app/post/details/0");
      const result = await data.json();
      
      
      setTimestamps(Math.floor((Date.now() - (result.post.timetamp) * 1000) / (1000 * 60 * 60)))
      setAvtars(result.post.token_uri)
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div className="flex flex-row  container mx-auto max-w-screen-xl p-5 overflow-hidden">
        <div className="rounded-3xl ">
          <Post
            id={1}
            displayName="Mr X"
            userName="MR X"
            text={avtars}
            avatar={avtars}
            image={avtars}
            timestamp={timestamps+" h"}
          />
       
          
          <Post
            id={1}
            displayName="Mr X"
            userName="MR X"
            text={avtars}
            avatar={avtars}
            image={avtars}
            timestamp={timestamps+" h"}
          />
         
          
        </div>
        
        <div className=" sr-only sm:not-sr-only ">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Explore;




