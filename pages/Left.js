import React, { useState, useEffect } from "react";
import { FiEdit2 } from "react-icons/fi";
import { Modal } from "./Modal";
import { ModalforPost } from "./ModalforPost";

const PPD = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [postOpen, setPostOpen] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://peerpost-api.vercel.app/profile/details/1"
      );
      const data = await response.json();

      setData(data);
    } catch (error) {
      console.error(error);
    }
  };

  const ProfileDropdown = ({
    displayName,
    userName,
    text,
    avatarppd,
    follower,
    following,
  }) => {
    return (
      <div className="flex flex-row items-center justify-center h-96 w-64 bg-white">
        <div className="post flex flex-col  p-4 my-1 rounded-lg h-full w-full">
          <div className="post__avatarppd p-2 border-double border-red-500">
            <img
              className="w-52 h-52 -mt-36  bg-white rounded-lg cursor-pointer ring-8 ring-purple-400"
              src={avatarppd}
              alt="Rounded avatarppd"
            />
          </div>
          <div className="post__body p-2 ">
            <div className="post__header">
              <div className="post__headerText flex space-x-32">
                <h3 className="font-medium flex flex-col">
                  {displayName}
                  <span className="post__headerSpecial font-thin text-sm text-red-400">
                    @{userName}{" "}
                  </span>
                </h3>
                <button onClick={() => setIsOpen(true)}>
                  <FiEdit2 />
                </button>
                <Modal open={isOpen} onClose={() => setIsOpen(false)}></Modal>
              </div>
              <div className="post__headerDescription break-words space-y-6">
                <p>{text}</p>
              </div>
            </div>

            <div className="post__footer flex flex-row space-x-6"></div>
          </div>
          <div className="flex flex-row space-x-5 my-1 text-sm Fixed-bottom-14 left-2 ">
            <div className="font-semibold">{following} Following</div>
            <div className="font-semibold">{follower} Followers</div>
          </div>
          <div className="">
            <ul className="space-y-2">
              <li>Intagram</li>
              <li>Twitter</li>
              <li>Github</li>
            </ul>
          </div>
          <div>
            <button
              onClick={() => {
                setPostOpen(true);
              }}
              className="button m-4 px-10 py-3 rounded-full bg-purple-500 text-white items-center justify-center"
            >
              Post
            </button>
            <ModalforPost
              open={postOpen}
              onClose={() => setPostOpen(false)}
            ></ModalforPost>
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      <div className="flex flex-row container  mx-auto max-w-screen-xl px-5">
        <div>
          {data ? (
            <ProfileDropdown
              displayName={data.profile.handle}
              userName={data.profile.handle}
              text="I am the ghost"
              avatarppd={data.profile.token_uri}
              follower={data.profile.followers_count}
              following={data.profile.following_count}
            />
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default PPD;
