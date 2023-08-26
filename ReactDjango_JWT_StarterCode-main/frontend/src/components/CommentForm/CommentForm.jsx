import React, { useState } from "react";
import axios from "axios";
import './CommentForm.css';

const CommentForm = (props) => {
  const [commentText, setCommentText] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    let newEntry = {
      user_id: 1, // Replace with the appropriate user ID
      video_id: "5HksV7ZFuhM", // Replace with the appropriate video ID
      text: commentText,
      likes: 0,
      dislikes: 0
    };
    props.addNewEntryProp(newEntry);
    setCommentText(''); // Clear the text area after submission
  }
  

  return (
    <div className="comment-form">
      <h2>Leave a Comment</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={commentText}
          onChange={e => setCommentText(e.target.value)}
          rows="4"
          placeholder="Enter your comment..."
        ></textarea>
        <button type="submit"style={{ width: "60px", height: "30px", font:"small-caption"}}>Submit</button>
      </form>
    </div>
  );
};

export default CommentForm;
