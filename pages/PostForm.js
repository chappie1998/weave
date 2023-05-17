import React, { useState } from "react";
import {GiCancel } from "react-icons/gi"

const PostForm = ({ onCancel, imageComponent }) => {
  const [formData, setFormData] = useState({});
  const handleSumbit = (e) => {
    e.preventDefault();
    const jsonData = JSON.stringify(formData);
    console.log(jsonData);
    setFormData({});
  };
  const handleCancel = () => {
    onCancel(); 
  };

  const handlechange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="bg-black h-80 p-9 rounded-2xl -mt-96 flex flex-col justify-between w-[800px]">
  <div className="flex justify-between">
  <div className="post__avatarppd p-2 border-double">
  <img
          className="w-10 h-10 rounded-full mb-3 cursor-pointer ring-4 ring-purple-400"
          src={imageComponent}
          alt="Rounded avatarppd"
        />
  </div>
    <button className="-mt-10" onClick={handleCancel}>
      <GiCancel className="text-white h-9 w-5" />
    </button>
  </div>
  <label htmlFor="message" className="block mb-2 font-medium text-white text-xl">
    What's on your mind
  </label>
  <form onSubmit={handleSumbit} className="flex flex-col justify-between items-center flex-grow">
    <textarea
      id="message"
      name="text"
      value={formData.text || ""}
      onChange={handlechange}
      rows="3"
      className="block p-2.5 w-full text-xl text-white bg-black rounded-lg focus:outline-none"
      placeholder="Leave a comment..."
    ></textarea>
    <div className="h-px bg-gray-400 w-full my-2"></div>
    <div className="flex justify-end sm:w-[700px] ">
      <button className="button m-4 px-10 py-1 rounded-full bg-purple-500 text-white">
        Post
      </button>
    </div>
  </form>
</div>


  );
};

export default PostForm;
