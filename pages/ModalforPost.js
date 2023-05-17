import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import PostForm from "./PostForm";
import {GiCancel } from "react-icons/gi"

export const ModalforPost = ({ children, open, onClose }) => {
  const [mounted, setMounted] = useState(false);
 

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!open) return null;

  const modelContent = open ? (
    <div className="modal-overlay ">
      <div className="h- w-5/12 ">
        {children}
        <button onClick={onClose} className="yarn -translate-y-[45vh]  translate-x-3 ">
          <GiCancel className="text-white h-9 w-5"/>
        </button>

        <PostForm/>
      </div>
    </div>
  ) : null;

  if (mounted) {
    return ReactDOM.createPortal(
      modelContent,
      document.getElementById("post")
    );
  } else {
    return null;
  }
};
