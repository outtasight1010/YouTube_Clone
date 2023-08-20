import React, { useState } from "react";
import axios from "axios";
import './CommentForm.css';

const CommentForm = ({ videoId, onCommentSubmit }) => {
  const [commentText, setCommentText] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (commentText.trim() === "") {
      return;
    }

    try {
      const response = await axios.post(
        'http://your-backend-api-url/api/comments',
        { text: commentText }
      );
      onCommentSubmit(response.data);
      setCommentText("");
    } catch (error) {
      console.error("Error submitting comment:", error);
    }
  };

  return (
    <div className="comment-form">
      <h2>Add a Comment</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          rows="4"
          placeholder="Write your comment..."
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CommentForm;
