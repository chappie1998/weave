import React from 'react'

const ButtonForProfile = () => {
  return (
    <div className='mx-3'>
      <button
        type="button"
        className="text-black focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center m-2 "
      >
        Feed
      </button>
      <button
        type="button"
        className="text-black focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center m-2 "
      >
       Replies
      </button>
      <button
        type="button"
        className="text-black  focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center m-2 "
      >
       Media
      </button>
      <button
        type="button"
        className="text-black focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center m-2 "
      >
        Collected
      </button>
      <button
        type="button"
        className="text-black focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center m-2 "
      >
        NFTs
      </button>
      
    </div>
  )
}

export default ButtonForProfile