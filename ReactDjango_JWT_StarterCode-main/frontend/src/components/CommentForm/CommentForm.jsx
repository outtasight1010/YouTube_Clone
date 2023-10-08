import React, { useState } from "react";
import axios from "axios";
import './CommentForm.css';
import useAuth from "../../hooks/useAuth";

function CommentForm(props) {
  const [commentText, setCommentText] = useState('');
  const [user, token] = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newComment = {
      video_id: props.videoId,
      text: commentText,
      isLocal: true, // Mark the comment as local
    };

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    axios
      .post('http://127.0.0.1:8000/api/comments/create/', newComment, { headers })
      .then(response => {
        console.log('Comment submitted successfully:', response.data);
        setCommentText('');
        props.fetchComments(); // You can keep this to ensure the server data is updated as well
      })
      .catch(error => {
        console.error('Error submitting comment:', error);
      });
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
        <button type="submit" style={{ width: "60px", height: "30px", font: "small-caption" }}>Submit</button>
      </form>
    </div>
  );
}

export default CommentForm;









  



