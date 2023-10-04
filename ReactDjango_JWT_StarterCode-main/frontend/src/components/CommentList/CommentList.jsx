import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CommentList.css';

const CommentList = ({ videoId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/comments/all/`);
        console.log('Fetched comments:', response.data);
        const commentsForVideo = response.data.filter(comment => comment.video_id === videoId);
        console.log('Comments for video:', commentsForVideo);
        setComments(commentsForVideo);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };
    
    fetchComments();
  }, [videoId]);
  
  // Function to add a new comment to the comments list
  const addNewComment = (newComment) => {
    // Update the comments state with the new comment
    setComments([...comments, newComment]);
  };
  

  return (
    <div className="comment-list">
      <h2>Comments</h2>
      {comments.map(comment => (
        <div key={comment.id} className="comment">
          <p>{comment.text}</p>
          {/* <p>User: {comment.user.username}</p> */}
          {/*<p>Likes: {comment.likes}</p>*/}
          {/*<p>Dislikes: {comment.dislikes}</p>*/}
        </div>
      ))}
    </div>
  );
};

export default CommentList;

