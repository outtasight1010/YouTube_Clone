import React, { useState } from "react";
import CommentForm from "../CommentForm/CommentForm";
import CommentList from "../CommentList/CommentList";

const Comment = ({ videos }) => {
  const [comments, setComments] = useState([]);

  //  A function to add a new comment to the comments list
  const addNewEntry = (newEntry) => {
    setComments([...comments, newEntry]);
  };

  return (
    <div className="comment-container">
      <CommentForm addNewEntryProp={addNewEntry} />
      <CommentList comments={comments} />
    </div>
  );
};

export default Comment;

