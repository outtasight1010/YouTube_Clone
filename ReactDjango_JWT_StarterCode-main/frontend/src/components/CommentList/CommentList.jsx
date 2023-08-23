import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CommentList = ({ videoId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/comments/all/?video_id=${videoId}`
          , 
          {
            params: {
              video_id: videoId, 
            },
          }
        );
        setComments(response.data);
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
