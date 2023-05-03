import React from "react";

const Button = () => {
  return (
    <div className="my-2 mx-3">
      <button
        type="button"
        className="text-white  bg-purple-600 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center m-2 "
      >
        All Post
      </button>
      <button
        type="button"
        className="text-white  bg-purple-600 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center m-2 "
      >
       Text
      </button>
      <button
        type="button"
        className="text-white  bg-purple-600  focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center m-2 "
      >
       Video
      </button>
      <button
        type="button"
        className="text-white  bg-purple-600 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center m-2 "
      >
        Audio
      </button>
      <button
        type="button"
        className="text-white  bg-purple-600 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center m-2 "
      >
        Images
      </button>
      
    </div>
  );
};

export default Button;
