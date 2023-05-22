"use client";

import { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import Post from "@/components/Post";
import { config } from "@/config";

export default function Explore() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  let user: any;
  // window is not accessable on server
  if (typeof window !== "undefined") {
    user = sessionStorage.getItem("user");
    if (user) user = JSON.parse(user);
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch(`${config.baseUrl}/post`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          page: 0,
          limit: 10,
          who: user?.profile_id ?? null,
        }),
      });
      const data = await response.json();
      setPosts(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="flex flex-row container mx-auto max-w-screen-xl p-5">
        <div className="rounded-3xl">
          {loading ? (
            <div className="w-[115vh] items-center justify-center">
              {[...Array(2)].map((_, index) => (
                <div
                  key={index}
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
              ))}
            </div>
          ) : (
            posts.map((post) => (
              <div
                key={post.post_id}
                className="first:rounded-t-xl last:rounded-b-xl hover:bg-slate-100 cursor-pointer border border-solid"
              >
                <Post
                  profile={post.profile}
                  post={{
                    post_id: post.post_id,
                    data: post.data,
                    timestamp: post.timestamp,
                    total_likes: post.total_likes,
                    total_comments: post.total_comments,
                    is_liked_by_me: post.is_liked_by_me,
                  }}
                  // userName={post.profile.handle.replace(/[^a-zA-Z0-9 ]/g, "")}
                  // text={post.data.content}
                  // avatar={post.profile.token_uri}
                  // images={post.data.images}
                  // timestamp={formatTimestamp(post.timetamp)}
                  // profileData={post.profile}
                  // totalLikes={post.total_likes}
                  // totalComments={post.total_comments}
                  // isLikedByMe={post.is_liked_by_me}
                />
              </div>
            ))
          )}
        </div>

        <div className="sr-only sm:not-sr-only">
          <Footer />
        </div>
      </div>
    </>
  );
}
