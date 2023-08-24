import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CommentList.css';

const CommentList = ({ videoId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/comments/all/`
        );
        // Filtering comments based on the provided videoId
        const commentsForVideo = response.data.filter(comment => comment.video_id === videoId);
        setComments(commentsForVideo);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    fetchComments();
  }, [videoId]);

  return (
    <div className="comment-list">
      <h2>Comments</h2>
      {comments.map(comment => (
        <div key={comment.id} className="comment">
          <p>{comment.text}</p>
          <p>Likes: {comment.likes}</p>
          <p>Dislikes: {comment.dislikes}</p>
        </div>
      ))}
    </div>
  );
};

export default CommentList;

