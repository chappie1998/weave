import React, { useState } from "react";

const PostForm = () => {
  const [formData, setFormData] = useState({});
  const handleSumbit = (e) => {
    e.preventDefault();
    const jsonData = JSON.stringify(formData);
    console.log(jsonData);
    setFormData({});
  };

  const handlechange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="bg-black h-80 p-9 rounded-2xl -mt-96">
      <div className="post__avatarppd p-2 border-double">
        <img
          className="w-10 h-10 rounded-full cursor-pointer ring-8 ring-purple-400"
          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Rounded avatarppd"
        />
      </div>
      <label htmlFor="message" className="block mb-2 font-medium text-white text-xl">
        What's on your mind
      </label>
      <form onSubmit={handleSumbit} className="flex flex-col justify-between items-center">
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
        <button className="button m-4 px-10 py-1 rounded-full bg-purple-500 text-white translate-x-64">
          Post
        </button>
      </form>
    </div>
  );
};

export default PostForm;
