import React from 'react'

const PostForm = () => {
  return (
    <div >
    <label htmlFor="message" className="block mb-2 font-medium text-gray-900 text-xl ">Whats on Your mind</label>
    <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
    <button className="button m-4 px-10 py-3 rounded-full bg-purple-500 text-white items-center justify-center">Post</button>
    </div>
  )
}

export default PostForm