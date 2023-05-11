import React, { useState,useEffect } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiChat } from "react-icons/bi";
import { BsArrowDownUp } from "react-icons/bs";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import PPD from "./ProfileDropDown";
import Link from "next/link";




const Right = () => {
  const [timestamps, setTimestamps] = useState("")
  const [avtars, setAvtars] = useState("")


  useEffect(() => {
    PostDetails();
  }, []);
  
  
  
  const PostDetails = async () => {
    try {
      const data = await fetch("https://peerpost-api.vercel.app/post/details/0");
      const result = await data.json();
      
      setTimestamps(Math.floor((Date.now() - (result.post.timetamp) * 1000) / (1000 * 60 * 60)))
      setAvtars(result.post.token_uri)
    } catch (error) {
      console.error(error);
    }
  };
  const Post = ({ displayName, userName, text, image, avatar, timestamp }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const notify = () => toast.error("Please Sign In Your Wallet");
    const router = useRouter();
    const handleCommentClick = () => {
      router.push({
        pathname: "/CommentsPage",
       
        state: {
          post: { displayName, userName, text, image, avatar, timestamp },
        },
      });
    };
  
 
    

    return (
      <>
        <div className="flex flex-row container items-center justify-center bg-white ">
          <div className="post flex flex-row border rounded-t-lg shadow px-8">
            <div className="flex flex-col ">
              <div className="">
                <div
                  className="dropdown absolute"
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  <Link href={"/Profile"}>
                    <button className="dropdown-button  -translate-x-5 translate-y-5">
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
              <img src={image} alt="" className="p-10 h-80 w-96 " />
              <div className="post__footer flex flex-row space-x-6">
            <button
              onClick={handleCommentClick}
              className="hover:bg-blue-200 rounded-full p-1.5 "
            >
              {" "}
              <BiChat
              className=" h-5 w-10" />{" "}
            </button>{" "}
            <div className="hover:bg-red-200 rounded-full p-1.5">
              {" "}
              <AiOutlineHeart
                onClick={notify}
                className="h-5 w-10"
              />
              <ToastContainer
                position="bottom-right"
                autoClose={1000}
                hideProgressBar={true}
              />
            </div>
            <div className=" hover:bg-purple-200 rounded-full p-1.5">
              {" "}
              <BsArrowDownUp
                onClick={notify}
                className="h-5 w-10"
              />
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
  };

  return (
    <>
      <div className="flex flex-row container mx-auto max-w-screen-xl">
        <div>
          <Post
            displayName="Mr X"
            userName="MR X"
            text={avtars}
            avatar={avtars}
            image={avtars}
            timestamp={timestamps+"h"}
          />
        
        </div>
      </div>
    </>
  );
};

export default Right;
