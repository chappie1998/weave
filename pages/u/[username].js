// pages/[username].js

import { useRouter } from "next/router";

import React, { useState, useEffect } from "react";
import Right from "../Right";
import ProfileCover from "../ProfileCover";
import Left from "../Left";
import ButtonForProfile from "../ButtonForProfile";

export default function UserProfile() {
  const router = useRouter();
  const { username } = router.query;
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
      setProfiledetails(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className=" flex flex-col items-center justify-center">
      <div className="coverPage">
        <ProfileCover />
      </div>
      <div className="flex flex-col md:flex-row mt-[2rem] container mx-auto max-w-screen-xl space-y-6">
        <div className="left items-center md:w-1/3">
          <Left />
        </div>
        <div className="right w-full md:w-2/3 ">
          <ButtonForProfile />
          <Right profiledetails={profiledetails} />
        </div>
      </div>
    </div>
  );
}
