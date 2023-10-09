import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CommentList.css';

const CommentList = ({ videoId, newComments }) => {
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/comments/all/`);
      console.log('Fetched comments:', response.data);
      const commentsForVideo = response.data.filter(comment => comment.video_id === videoId);
      console.log('Comments for video:', commentsForVideo);
      setComments([...newComments, ...commentsForVideo]); 
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [videoId, newComments]);

  return (
    <div className="comment-list">
      <h2>Comments</h2>
      {comments.map(comment => (
        <div key={comment.id} className="comment">
          <p>{comment.text}</p>
        </div>
      ))}
    </div>
  );
};

export default CommentList;





