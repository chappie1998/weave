"use client";

import { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiChat } from "react-icons/bi";
import { toast } from "react-toastify";
import ProfileDropDown from "@/components/ProfileDropDown";
import { useRouter } from "next/navigation";
import { config } from "@/config";

export default function Post(props: any) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const router = useRouter();

  let user: any;
  // window is not accessable on server
  if (typeof window !== "undefined") {
    user = sessionStorage.getItem("user");
    if (user) user = JSON.parse(user);
  }

  const navigateToProfile = (e: any) => {
    e.stopPropagation();
    router.push(`/u/${props.userName}`);
  };

  const navigateToPost = () => {
    router.push(`/posts/${props.postId}`);
  };

  const addLike = async (e: any) => {
    e.stopPropagation();
    if (!user) return toast.error("Please Sign In Your Wallet");
    try {
      await fetch(`${config.baseUrl}/like`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          post_id: props.postId,
          profile_id: user.profile_id,
          timestamp: 123456863435,
        }),
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <article
        onClick={navigateToPost}
        className="post shadow-sm py-5 px-7 flex gap-1"
      >
        <div className="dropdown relative">
          <button
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
            onClick={navigateToProfile}
            className="dropdown-button transition-transform -mt-4 -translate-x-5 translate-y-5"
          >
            <img
              className="w-10 h-10 border bg-gray-600  rounded-full cursor-pointer"
              src={props.avatar}
              alt="Rounded avatar"
            />
          </button>
          <div className="absolute">
            {isDropdownOpen && (
              <ProfileDropDown profileData={props.profileData} />
            )}
          </div>
        </div>

        <div className="post__body w-full">
          <div className="post__header">
            <div className="post__headerText inline-block cursor-pointer">
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
              <p>{props.text}</p>
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
              className={`hover:bg-red-200 cursor-pointer rounded-full p-1.5 flex flex-row items-center ${
                props.isLikedByMe && "bg-red-200"
              }`}
            >
              <AiOutlineHeart onClick={addLike} className="h-5 w-10" />
              <span className="-mt-1 p-2">{props.totalLikes}</span>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
