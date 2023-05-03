import React from "react";

const Footer = () => {
  return (
    <div className="first line sticky top-12 container mx-auto max-w-screen-xl px-5 ">
      <div className="first space-x-4  p-5 break-words">
        <span className="font-semibold font-mono">© 2023 Lenster </span>
       
        <div className="flex flex-col justify-between "> <div className="space-x-2">
        <span className="font-medium ">Terms</span>
        <span className="font-medium">Privacy</span>
        <span className="font-medium">Discord</span>
        <span className="font-medium">Donate</span>
        <span className="font-medium">Status</span>
        </div>
        <div className="space-x-2">
        <span className="font-medium">Feedback</span>
        <span className="font-medium">Thanks</span>
        <span className="font-medium">Github</span>
        <span className="font-medium">Translate</span>
        </div>
        </div>


      </div>
      <div className="second"></div>
    </div>
  );
};

export default Footer;
