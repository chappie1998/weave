// pages/[username].js

import { useRouter } from "next/router";

import React, { useState, useEffect } from "react";
import Right from "../Right";
import ProfileCover from "../ProfileCover";
import Left from "../Left";
import ButtonForProfile from "../ButtonForProfile";
import { config } from "@/config";

export default function UserProfile() {
  const router = useRouter();
  const { username } = router.query;
  const [data, setData] = useState();

  useEffect(() => {
    fetchProfileDetails();
  }, []);

  const fetchProfileDetails = async () => {
    try {
      const response = await fetch(`${config.baseUrl}/profile/details`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ profile_id: 2 }),
      });
      const data = await response.json();
      setData(data);
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
          <Left data={data} />
        </div>
        <div className="right w-full space-y-3 md:w-2/3 ">
          <ButtonForProfile />
          <Right profiledetails={data} />
        </div>
      </div>
    </div>
  );
}
