import React, { useState } from "react";
import CommentForm from "../CommentForm/CommentForm";
import CommentList from "../CommentList/CommentList";

const Comment = () => {
  const [comments, setComments] = useState([]);

  const addNewEntry = newEntry => {
    // Updating the comments state with the new entry
    setComments(prevComments => [...prevComments, newEntry]);
  };

  return (
    <div className="comment-container">
      <CommentForm addNewEntryProp={addNewEntry} />
      <CommentList comments={comments} />
    </div>
  );
};

export default Comment;
