import React, { useState } from "react";
import axios from "axios";
import './CommentForm.css';

const CommentForm = ({ videoId }) => {
  const [commentText, setCommentText] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/api/comments/create_comment/',
        {
          video_id: videoId,
          text: commentText,
        }
      );
      console.log('Comment created:', response.data);
      // Clearing the comment text after submission
      setCommentText('');
    } catch (error) {
      console.error('Error creating comment:', error);
    }
  };

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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CommentForm;
