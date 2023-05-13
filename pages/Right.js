import React, { useState, useEffect } from "react";

import "react-toastify/dist/ReactToastify.css";

import Post from "./Post";

const Right = () => {
  const [profiledetails, setProfiledetails] = useState([]);

  useEffect(() => {
    fetchProfileDetails();
  }, []);

  const fetchProfileDetails = async () => {
    try {
      const response = await fetch(
        "https://peerpost-api.vercel.app/profile/details/1"
      );
      const data = await response.json();
      setProfiledetails(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-row container mx-auto max-w-screen-xl">
      <div>
        {[profiledetails].map((profile) => (
          <Post
            key="{profile.profile.profile_id}"
            displayName="Mr X"
            userName="{profile.handle}"
            text={profile.posts[0].data.content}
            avatar="{profile.token_uri}"
            image="{avtars}"
            timestamp=""
          />
        ))}
      </div>
    </div>
  );
};

export default Right;
