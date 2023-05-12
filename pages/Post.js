import React, { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiChat } from "react-icons/bi";
import { BsArrowDownUp } from "react-icons/bs";
import PPD from "./ProfileDropDown";
import Link from "next/link";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Post = ({
  id,
  displayName,
  userName,
  text,
  images,
  avatar,
  timestamp,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const notify = () => toast.error("Please Sign In Your Wallet");
  const router = useRouter();
  const handleCommentClick = () => {
    router.push({
      pathname: "/CommentsPage",
      query: { id },
      state: {
        post: { displayName, userName, text, image, avatar, timestamp },
      },
    });
  };

  return (
    <div className=" container flex flex-row items-center justify-center  ">
      <div className="post flex flex-row border border-solid shadow-sm py-5 px-7 hover:bg-slate-100 cursor-pointer  sm:w-4/5  ">
        <div className="flex flex-col ">
          <div className="">
            <div
              className="dropdown absolute"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <Link href={"/Profile"}>
                <button className="dropdown-button  transition-transform   -translate-x-5 translate-y-5">
                  {" "}
                  <img
                    className="w-10 h-10 border bg-gray-600   rounded-full cursor-pointer    "
                    src={avatar}
                    alt="Rounded avatar"
                  />
                </button>
              </Link>
              {isDropdownOpen && <PPD />}
            </div>
          </div>
        </div>

        <div className="post__body w-full mx-6">
          <div className="post__header">
            <div className="post__headerText">
              <h3 className="font-medium flex flex-col">
                {displayName}
                <span className="post__headerSpecial font-thin text-sm text-red-400">
                  @{userName} <span className="text-black">- {timestamp}</span>
                </span>
              </h3>
            </div>
            <div className="post__headerDescription break-words space-y-6">
              <p>{text}</p>
            </div>
          </div>
          {images.map((image) => (
            <img src={image} alt="" className="p-10 h-auto w-auto " />
          ))}
          <div className="post__footer flex flex-row space-x-6">
            <button
              onClick={handleCommentClick}
              className="hover:bg-blue-200 rounded-full px-1.5  "
            >
              {" "}
              <BiChat className=" h-5 w-10" />{" "}
            </button>{" "}
            <div className="hover:bg-red-200 rounded-full p-1.5">
              {" "}
              <AiOutlineHeart onClick={notify} className="h-5 w-10" />
              <ToastContainer
                position="bottom-right"
                autoClose={1000}
                hideProgressBar={true}
              />
            </div>
            <div className=" hover:bg-purple-200 rounded-full p-1.5">
              {" "}
              <BsArrowDownUp onClick={notify} className="h-5 w-10" />
              <ToastContainer
                position="bottom-right"
                autoClose={1000}
                hideProgressBar={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
