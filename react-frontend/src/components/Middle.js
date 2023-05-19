import React from "react";

const Middle = () => {
  return (
    <div
      className=" mx-auto flex w-full  items-stretch px-5 py-8 text-center sm:py-12 sm:text-left bg-gradient-to-r from-white to-fuchsia-300
    "
    >
      <div className="flex-1 space-y-3 container mx-auto max-w-screen-xl px-5">
        <div className="font-serif text-2xl font-extrabold sm:text-4xl">
          Welcome to Lenster 👋
        </div>
        <div className="leading-7 text-black">
          Lenster is a decentralized, and permissionless social media <br/>app built
          with Lens Protocol 🌿
        </div>
        
      </div>
      
    </div>
  );
};

export default Middle;