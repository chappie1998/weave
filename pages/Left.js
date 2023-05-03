import React from "react";

const PPD = () => {
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
              className="w-52 h-52 -mt-36  rounded-lg cursor-pointer ring-8 ring-purple-400"
              src={avatarppd}
              alt="Rounded avatarppd"
            />
          </div>
          <div className="post__body p-2 ">
            <div className="post__header">
              <div className="post__headerText">
                <h3 className="font-medium flex flex-col">
                  {displayName}
                  <span className="post__headerSpecial font-thin text-sm text-red-400">
                    @{userName}{" "}
                  </span>
                </h3>
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
            <ul className="space-y-2" >
                <li>Intagram</li>
                <li>Twitter</li>
                <li>Github</li>
            </ul>
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      <div className="flex flex-row container  mx-auto max-w-screen-xl px-5">
        <div>
          <ProfileDropdown
            displayName="Mr X"
            userName="MR X"
            text="Hello from Mr X.."
            avatarppd="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            follower="200"
            following="233"
          />
        </div>
      </div>
    </>
  );
};

export default PPD;
