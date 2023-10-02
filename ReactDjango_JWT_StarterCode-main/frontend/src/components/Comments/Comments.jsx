import React, { useState } from "react";
import CommentForm from "../CommentForm/CommentForm";
import CommentList from "../CommentList/CommentList";

const Comment = ({ videos, addNewEntryProp }) => {
    const [commentText, setCommentText] = useState('');
  
    function handleSubmit(e) {
      e.preventDefault();
      let newEntry = {
        text: commentText,
       
      };
      addNewEntryProp(newEntry);
      setCommentText(''); 
    }

  return (
    <div className="comment-container">
      <CommentForm addNewEntryProp={addNewEntryProp} />
      
    </div>
  );
};

export default Comment;
