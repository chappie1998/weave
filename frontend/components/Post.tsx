"use client";

import { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiChat } from "react-icons/bi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProfileDropDown from "@/components/ProfileDropDown";
import { useRouter } from "next/navigation";

export default function Post(props: any) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const notify = () => toast.error("Please Sign In Your Wallet");
  const router = useRouter();

  const navigateToProfile = (e: any) => {
    e.stopPropagation();
    router.push(`/u/${props.userName}`);
  };

  const navigateToPost = () => {
    router.push(`/posts/${props.postId}`);
  };

  return (
    <>
      <div className=" container flex flex-row items-center justify-center">
        <div
          onClick={navigateToPost}
          className="post flex flex-row border border-solid shadow-sm py-5 px-7 hover:bg-slate-100 cursor-pointer  sm:w-4/5  "
        >
          <div className="flex flex-col ">
            <div className="">
              <div
                className="dropdown absolute"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <button
                  onClick={navigateToProfile}
                  className="dropdown-button  transition-transform -mt-4   -translate-x-5 translate-y-5"
                >
                  <img
                    className="w-10 h-10 border bg-gray-600  rounded-full cursor-pointer"
                    src={props.avatar}
                    alt="Rounded avatar"
                  />
                </button>
                {isDropdownOpen && (
                  <ProfileDropDown profileData={props.profileData} />
                )}
              </div>
            </div>
          </div>

          <div className="post__body w-full mx-6">
            <div className="post__header">
              <div className="post__headerText">
                <h3
                  onClick={navigateToProfile}
                  className="font-medium flex flex-col"
                >
                  {props.userName}

                  <span className="post__headerSpecial font-thin text-sm text-red-400">
                    @{props.userName}
                    <span className="text-black">- {props.timestamp}</span>
                  </span>
                </h3>
              </div>
              <div className="post__headerDescription break-words my-5 space-y-6">
                <div>{props.text}</div>
              </div>
            </div>
            {props.images.map((image: string, index: number) => (
              <img
                key={index}
                src={image}
                alt=""
                className="p-10 h-auto w-auto "
              />
            ))}
            <div className="post__footer flex flex-row space-x-6 ">
              <div className="hover:bg-blue-200 rounded-full p-1.5 flex flex-row items-center">
                <BiChat className=" h-5 w-10" />
                <span className="-mt-1 p-2">{props.totalComments}</span>
              </div>
              <div
                className={`hover:bg-red-200 rounded-full p-1.5 flex flex-row items-center ${
                  props.isLikedByMe && "bg-red-200"
                }`}
              >
                <AiOutlineHeart onClick={notify} className="h-5 w-10" />
                <span className="-mt-1 p-2">{props.totalLikes}</span>
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
