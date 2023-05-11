import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import PostForm from "./PostForm";
import {GiCancel } from "react-icons/gi"

export const ModalforPost = ({ children, open, onClose }) => {
  const [mounted, setMounted] = useState(false);
  if (!open) return null;

  useEffect(() => {
    setMounted(true);
  }, []);

  const modelContent = open ? (
    <div className="modal-overlay ">
      <div className="h- w-5/12 ">
        {children}
        <button onClick={onClose} className="yarn translate-y-8  translate-x-3">
          <GiCancel className="text-white"/>
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
