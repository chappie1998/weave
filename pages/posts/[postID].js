import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Post from "../Post";
import PPD from "../ProfileDropDown";
const PostDetails = () => {
  const router = useRouter();
  const { postID } = router.query;
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch(
        `https://peerpost-api.vercel.app/post/details/${postID}`
      );
      const data = await response.json();

      console.log(data);
      setPosts(data);

      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };
  const formatTimestamp = (timestamp) => {
    const hoursAgo = Math.floor(
      (Date.now() - timestamp * 1000) / (1000 * 60 * 60)
    );
    if (hoursAgo >= 24) {
      const daysAgo = Math.floor(hoursAgo / 24);
      return `${daysAgo}d`;
    } else {
      return `${hoursAgo}h`;
    }
  };

  return (
    <div className="justify-center flex">
      {loading ? (
        <div className="w-[115vh] items-center justify-center">
          <div
            role="status"
            className="max-w-sm p-4  container  w-[90vh] rounded animate-pulse md:p-6 items-center justify-center "
          >
            <div className="flex flex-row space-x-2">
              <div className=" bg-gray-200 rounded-full w-7 h-7 mb-4"></div>
              <div>
                <div className=" bg-gray-200 rounded-full w-28 h-1.5 mb-4"></div>
                <div className=" bg-gray-200 rounded-full w-28 h-1.5 mb-4"></div>
              </div>
            </div>

            <div className="h-2 bg-gray-200 rounded-full mb-2.5 w-[80vh]"></div>
            <div className="h-2 bg-gray-200 rounded-full mb-2.5 w-[80vh]"></div>
            <div className="h-2 bg-gray-200 rounded-full w-[80vh]"></div>
            <div className="flex items-center justify-center h-48 w-[80vh] mb-4 bg-gray-300 rounded">
              <svg
                className="w-12 h-12 text-gray-200"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 640 512"
              >
                <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
              </svg>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div>
            <div className="flex flex-col lg:flex-row ">
              <div className="ml-10">
                <Post
                  key={posts.post.post_id}
                  postId={posts.post.post_id}
                  displayName={posts.post.profile.handle}
                  userName={posts.post.profile.handle}
                  text={posts.post.data.content}
                  avatar={posts.post.profile.token_uri}
                  images={posts.post.data.images}
                  timestamp={formatTimestamp(posts.post.timetamp)}
                  profileData={posts.post.profile}
                />
              </div>
              <div className="lg:-ml-48">
                <PPD profileData={posts.post.profile} />
              </div>

            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PostDetails;
