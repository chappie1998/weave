import React,{useState,useEffect} from "react";

const PPD = () => {

  const [follower, setFollower] = useState("");
  const [following, setFollowing] = useState("");
  const [avtar, setAvtar] = useState("")

  useEffect(() => {
    profileDeatils();
  },[]);

  const profileDeatils = async () => {
    const data = await fetch(
      "https://peerpost-api.vercel.app/profile/details/1"
    );
    let result = await data.json();
    console.log(result)
    
    setFollowing(result.profile.following_count);
    setFollower(result.profile.followers_count);
    setAvtar(result.profile.token_uri)
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
      <div className="flex flex-row items-center justify-center h-64 w-64 bg-white">
        <div className="post flex flex-col border-2 shadow-xl p-4 my-1 rounded-lg h-64 w-64">
          <div className="post__avatarppd p-2">
            <img
              className="w-10 h-10 rounded-full cursor-pointer"
              src={avatarppd}
              alt="Rounded avatarppd"
            />
          </div>
          <div className="post__body p-2">
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
          <div className="flex flex-row space-x-5 my-1 text-sm relative -bottom-14 left-2">
            <div className="font-semibold">{following} Following</div>
            <div className="font-semibold">{follower} Followers</div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      <div className="flex flex-row container mx-auto max-w-screen-xl px-5">
        <div>
          <ProfileDropdown
            displayName="Mr X"
            userName="MR X"
            text="Hello from Mr X.."
            avatarppd={avtar}
            follower={follower}
            following={following}
          />
        </div>
      </div>
    </>
  );
};

export default PPD;
