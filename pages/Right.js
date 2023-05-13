import React, { useState, useEffect } from "react";

import "react-toastify/dist/ReactToastify.css";

import Post from "./Post";

const Right = () => {
  const [profiledetails, setProfiledetails] = useState();

  useEffect(() => {
    fetchProfileDetails();
  }, []);

  const fetchProfileDetails = async () => {
    try {
      const response = await fetch(
        "https://peerpost-api.vercel.app/profile/details/1"
      );
      const data = await response.json();
      console.log(data);
      setProfiledetails(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-row container mx-auto max-w-screen-xl">
      <div>
        {profiledetails ? (
          profiledetails.posts.map((post) => (
            <Post
              key="{profile.profile.profile_id}"
              displayName="Mr X"
              userName={profiledetails.profile.handle}
              text={post.data.content}
              avatar={profiledetails.profile.token_uri}
              images={post.data.images}
              timestamp=""
            />
          ))
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Right;
