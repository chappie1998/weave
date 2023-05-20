import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import PostForm from "./PostForm";


export const ModalforPost = ({ children, open, onClose ,imageComponent}) => {
  const [mounted, setMounted] = useState(false);
 

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!open) return null;

  const modelContent = open ? (
    <div className="modal-overlay ">
     
        {children}
        

        <PostForm onCancel={onClose} imageComponent={imageComponent} />
      
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
