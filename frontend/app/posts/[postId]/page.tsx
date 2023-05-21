"use client";

import React, { useState, useEffect } from "react";
import Post from "@/components/Post";
import ProfileDropDown from "@/components/ProfileDropDown";
import { config } from "@/config";
import PostComponentForComments from "@/components/PostComponetForComments";
import { toast } from "react-toastify";

export default function Page({ params }: any) {
  const { postId } = params;
  const [posts, setPosts] = useState<any>();
  const [loading, setLoading] = useState(true);

  let user: any;

  // window is not accessable on server
  if (typeof window !== "undefined") {
    user = sessionStorage.getItem("user");
    if (user) user = JSON.parse(user);
  }

  useEffect(() => {
    if (postId) {
      fetchPosts();
    }
  }, [postId]);

  const fetchPosts = async () => {
    try {
      const response = await fetch(`${config.baseUrl}/post/details/${postId}`);
      const data = await response.json();
      setPosts(data);

      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };
  const formatTimestamp = (timestamp: number) => {
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

  const addComment = async (comment: string) => {
    try {
      await fetch(`${config.baseUrl}/comment`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          post_id: +postId,
          profile_id: user.profile_id,
          token_uri:
            "https://bafkreie7qjq564mty2tdd7juhoeachbbi74nyedf37bdfxhwytyve64rwq.ipfs.w3s.link",
          timestamp: 1683609426,
          content: comment,
        }),
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleCommentSubmit = async (event: any) => {
    event.preventDefault();
    const comment = event.target.comment.value;
    if (!user) return toast.error("Please Sign In Your Wallet");
    if (!comment) return toast.error("Comment can not be empty");
    await addComment(comment);
    event.target.reset();
    fetchPosts();
  };

  return (
    <section className="container mx-auto max-w-screen-xl grow px-0 pb-2 pt-8 sm:px-5 ">
      <div className="grid grid-cols-12 lg:gap-8">
        {!loading ? (
          <>
            <div className="col-span-12 mb-5 md:col-span-12 lg:col-span-8 space-y-5 rounded-xl border border-solid pb-7">
              <Post
                postId={posts.post.post_id}
                displayName={posts.post.profile.handle}
                userName={posts.post.profile.handle.replace(
                  /[^a-zA-Z0-9 ]/g,
                  ""
                )}
                text={posts.post.data.content}
                avatar={posts.post.profile.token_uri}
                images={posts.post.data.images}
                timestamp={formatTimestamp(posts.post.timetamp)}
                profileData={posts.post.profile}
                totalLikes={posts.likes.length}
                totalComments={posts.comments.length}
                isLikedByMe={
                  posts.likes.filter(
                    (like: any) => like.profile_id === user?.profile_id
                  ).length
                }
              />
              <div className="shadow-md ">
                <form onSubmit={handleCommentSubmit} className="w-full p-4">
                  <div className="mb-2">
                    <label htmlFor="comment" className="text-lg text-gray-600">
                      Add a comment
                    </label>
                    <textarea
                      className="w-full h-20 p-2 border rounded focus:outline-none focus:ring-gray-300 focus:ring-1"
                      name="comment"
                      placeholder="Enter your comment"
                    ></textarea>
                  </div>
                  <button className="px-3 py-2 text-sm text-purple-100 bg-purple-600 rounded">
                    Comment
                  </button>
                </form>
              </div>
              {posts.comments.map((comment: any) => (
                <PostComponentForComments
                  key={comment.comment_id}
                  postId={comment.comment_id}
                  displayName={comment.profile.handle.replace(
                    /[^a-zA-Z0-9 ]/g,
                    ""
                  )}
                  userName={comment.profile.handle.replace(
                    /[^a-zA-Z0-9 ]/g,
                    ""
                  )}
                  text={comment.content}
                  avatar={comment.profile.token_uri}
                  timestamp={formatTimestamp(comment.timetamp)}
                  profileData={comment.profile}
                />
              ))}
            </div>

            <div className="col-span-12 md:col-span-12 lg:col-span-4 space-y-5">
              <ProfileDropDown profileData={posts.post.profile} />
            </div>
          </>
        ) : (
          <>
            <div className="col-span-12 mb-5 md:col-span-12 lg:col-span-8">
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
            <div className="col-span-12 md:col-span-12 lg:col-span-4 mx-auto border-2 rounded-md w-60">
              <div className="flex flex-row items-center justify-center h-full space-x-5 animate-pulse">
                <div className="w-12 h-12 bg-gray-300 rounded-full "></div>
                <div className="flex flex-col space-y-3">
                  <div className="h-6 bg-gray-300 rounded-md w-36 "></div>
                  <div className="w-24 h-6 bg-gray-300 rounded-md "></div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
