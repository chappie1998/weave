import React, { useState, useEffect } from "react";

import ProfileDropdownForLeft from "./ProfileDropDownForLEft";

const PPD = ({ data }) => {
  return (
    <>
      <div className="flex flex-row container  mx-auto max-w-screen-xl px-5">
        <div>
          {data ? (
            <ProfileDropdownForLeft
              profileID={data.profile.profile_id}
              displayName={data.profile.handle}
              userName={data.profile.handle}
              text="I am the ghost"
              avatarppd={data.profile.token_uri}
              follower={data.profile.followers_count}
              following={data.profile.following_count}
            />
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default PPD;
