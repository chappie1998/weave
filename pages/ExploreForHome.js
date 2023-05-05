import Explore from "./Explore";
import Tablist from "./Tablist";

import React, { useState } from "react";
import Button from "./Button";
import AllPost from "./AllPost";
import Text from "./Text";
import Video from "./Video";
import Audio from "./Audio";
import Images from "./Images";
import Foryou from "./Foryou";
import Popular from "./Popular";
import Trending from "./Trending";
import Interesting from "./Interesting";
import comment from "./Comment";
const ExploreForHome = () => {
  const [selectedButton, setSelectedButton] = useState("Explore");
  const [tabSelected, setTabSelected] = useState("Explore");

  const handleButtonSelect = (buttonName) => {
    setSelectedButton(buttonName);
  };

  const handleTablistSelect =(TabName) =>{
setTabSelected(TabName);
  }

  return (
    <div className="container mx-auto max-w-screen-xl px-5">
      <Tablist handleTablistSelect={handleTablistSelect} />
      <comment/>
   
      <Button handleButtonSelect={handleButtonSelect} />
      {selectedButton === "All Post" ? <AllPost /> : null}
      {selectedButton === "Text" ? <Text /> : null}
      {selectedButton === "Video" ? <Video /> : null}
      {selectedButton === "Audio" ? <Audio /> : null}
      {selectedButton === "Images" ? <Images /> : null}
      {selectedButton === "Explore" || selectedButton === "" ? (
        <Explore />
      ) : null}
    </div>
  );
};

export default ExploreForHome;
