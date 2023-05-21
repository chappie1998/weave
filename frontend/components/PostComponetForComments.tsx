"use client";

import React, { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiChat } from "react-icons/bi";
import ProfileDropDown from "@/components/ProfileDropDown";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function PostComponentForComments({
  postID,
  userName,
  text,
  avatar,
  timestamp,
  profileData,
  comments,
  likes,
}: any) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const notify = () => toast.error("Please Sign In Your Wallet");
  // const router = useRouter();
  // const handleCommentClick = () => {
  //   router.push(`/posts/${postID}`);
  // };

  return (
    <>
      <div className="container flex flex-row items-center justify-center">
        <div className="post flex flex-row rounded-xl border border-solid shadow-sm py-5 px-7 hover:bg-slate-100 cursor-pointer w-[740px]">
          <div className="flex flex-col ">
            <div className="">
              <div
                className="dropdown absolute"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <Link href={`/u/${userName}`}>
                  <button className="dropdown-button  transition-transform -mt-4   -translate-x-5 translate-y-5">
                    {" "}
                    <img
                      className="w-10 h-10 border bg-gray-600  rounded-full cursor-pointer    "
                      src={avatar}
                      alt="Rounded avatar"
                    />
                  </button>
                </Link>
                {isDropdownOpen && (
                  <ProfileDropDown profileData={profileData} />
                )}
              </div>
            </div>
          </div>

          <div className="post__body w-full mx-6">
            <div className="post__header">
              <div className="post__headerText">
                <Link href={`/u/${userName}`}>
                  <h3 className="font-medium flex flex-col">
                    {userName}

                    <span className="post__headerSpecial font-thin text-sm text-red-400">
                      @{userName}
                      <span className="text-black">- {timestamp}</span>
                    </span>
                  </h3>
                </Link>
              </div>
              <div className="post__headerDescription break-words my-5 space-y-6">
                <p>{text}</p>
              </div>
            </div>
            <div className="post__footer flex flex-row space-x-6 ">
              <div className="hover:bg-blue-200 rounded-full p-1.5 flex flex-row items-center">
                {" "}
                <button>
                  {" "}
                  <BiChat className=" h-5 w-10" />{" "}
                </button>
                <span className="-mt-1 py-2">{comments}</span>
              </div>{" "}
              <div className="hover:bg-red-200 rounded-full p-1.5 flex flex-row items-center">
                {" "}
                <AiOutlineHeart onClick={notify} className="h-5 w-10" />
                <span className="-mt-1 py-2">{likes}</span>
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
    </>
  );
}
