import React,{useState,useEffect} from "react";
import { useRouter } from "next/router";

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
        "https://peerpost-api.vercel.app/post/details"
      );
      const data = await response.json();

      console.log(data.post.post_id);
      setPosts(data);

      setLoading(false); // Set loading to false after receiving the response
    } catch (error) {
      console.error(error);
    }
  };
  // Fetch the post details using the postID or any other logic

  return (
    <div>
      <h1>Post Details</h1>
      <p>Post ID: {postID}</p>
      {/* Display the rest of the post details */}
    </div>
  );
};

export default PostDetails;
