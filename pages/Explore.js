import React, { useState } from "react";
import { AiOutlineHeart } from "react-icons/Ai";
import { BiChat } from "react-icons/Bi";
import { BsArrowDownUp } from "react-icons/Bs";
import Footer from "@/components/Footer";
import PPD from "./ProfileDropDown";
import Link from "next/link";

const Explore = () => {
  const Post = ({ displayName, userName, text, image, avatar, timestamp }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
      <div className=" container flex flex-row items-center justify-center hover:bg-slate-100">
        <div className="post flex flex-row border-2 shadow-xl p-8">
          <div className="flex flex-col ">
            <div className="">
              <div
                className="dropdown absolute"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <Link href ={"/Profile"}><button className="dropdown-button ">
                  {" "}
                  <img
                    className="w-44 h-10  rounded-full cursor-pointer object-contain -translate-x-28 max-w-full my-4 mx-6"
                    src={avatar}
                    alt="Rounded avatar"
                  />
                </button>
                </Link>
                {isDropdownOpen && <PPD />}
              </div>
            </div>
          </div>

          <div className="post__body w-full my-4 mx-6">
            <div className="post__header">
              <div className="post__headerText">
                <h3 className="font-medium flex flex-col">
                  {displayName}
                  <span className="post__headerSpecial font-thin text-sm text-red-400">
                    @{userName}{" "}
                    <span className="text-black">- {timestamp}</span>
                  </span>
                </h3>
              </div>
              <div className="post__headerDescription break-words space-y-6">
                <p>{text}</p>
              </div>
            </div>
            <img src={image} alt="" className="p-10 h-auto w-auto " />
            <div className="post__footer flex flex-row space-x-6">
              <BiChat />
              <AiOutlineHeart className="outline-red-400" />
              <BsArrowDownUp />
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="flex flex-row container mx-auto max-w-screen-xl px-5">
        <div>
          <Post
            displayName="Mr X"
            userName="MR X"
            text="Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.."
            avatar="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            image="https://media.istockphoto.com/id/1413150175/photo/panorama-60-mpix-xxxxl-size-of-beautiful-mount-ama-dablam-in-himalayas-nepal.jpg?s=1024x1024&w=is&k=20&c=mWvUbQuHUNOMda4WacL-q6GK5J8n-S85K6Gt-HrgHww="
            timestamp="13h"
          />
          <Post
            displayName="Mr X"
            userName="MR X"
            text="Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.."
            avatar="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            image="https://media.istockphoto.com/id/1413150175/photo/panorama-60-mpix-xxxxl-size-of-beautiful-mount-ama-dablam-in-himalayas-nepal.jpg?s=1024x1024&w=is&k=20&c=mWvUbQuHUNOMda4WacL-q6GK5J8n-S85K6Gt-HrgHww="
            timestamp="13h"
          />
          <Post
            displayName="Mr X"
            userName="MR X"
            text="Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.."
            avatar="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            image="https://media.istockphoto.com/id/1413150175/photo/panorama-60-mpix-xxxxl-size-of-beautiful-mount-ama-dablam-in-himalayas-nepal.jpg?s=1024x1024&w=is&k=20&c=mWvUbQuHUNOMda4WacL-q6GK5J8n-S85K6Gt-HrgHww="
            timestamp="13h"
          />
          <Post
            displayName="Mr X"
            userName="MR X"
            text="Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.."
            avatar="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            image="https://media.istockphoto.com/id/1413150175/photo/panorama-60-mpix-xxxxl-size-of-beautiful-mount-ama-dablam-in-himalayas-nepal.jpg?s=1024x1024&w=is&k=20&c=mWvUbQuHUNOMda4WacL-q6GK5J8n-S85K6Gt-HrgHww="
            timestamp="13h"
          />
          <Post
            displayName="Mr X"
            userName="MR X"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            avatar="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            image="https://media.istockphoto.com/id/1413150175/photo/panorama-60-mpix-xxxxl-size-of-beautiful-mount-ama-dablam-in-himalayas-nepal.jpg?s=1024x1024&w=is&k=20&c=mWvUbQuHUNOMda4WacL-q6GK5J8n-S85K6Gt-HrgHww="
            timestamp="13h"
          />
          <Post
            displayName="Mr X"
            userName="MR X"
            text="Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.."
            avatar="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            image="https://media.istockphoto.com/id/1413150175/photo/panorama-60-mpix-xxxxl-size-of-beautiful-mount-ama-dablam-in-himalayas-nepal.jpg?s=1024x1024&w=is&k=20&c=mWvUbQuHUNOMda4WacL-q6GK5J8n-S85K6Gt-HrgHww="
            timestamp="13h"
          />
        </div>
        <div className="sr-only sm:not-sr-only ">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Explore;
