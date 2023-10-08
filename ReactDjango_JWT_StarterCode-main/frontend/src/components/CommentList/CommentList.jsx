import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CommentList.css';

const CommentList = ({ videoId, newComment }) => {
  const [comments, setComments] = useState([]);

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

  useEffect(() => {
    fetchComments();
  }, [videoId]);

  useEffect(() => {
    // When a new comment is added, update the comments state to include it
    if (newComment) {
      setComments(prevComments => [...prevComments, newComment]);
    }
  }, [newComment]);

  const handleDelete = (commentToDelete) => {
    // Send a request to delete the comment from the API
    axios.delete(`http://127.0.0.1:8000/api/comments/${commentToDelete.id}/`)
      .then(response => {
        console.log('Comment deleted successfully:', response.data);
        // Update the local state to remove the deleted comment
        const updatedComments = comments.filter(comment => comment.id !== commentToDelete.id);
        setComments(updatedComments);
      })
      .catch(error => {
        console.error('Error deleting comment:', error);
      });
  };

  return (
    <div className="comment-list">
      <h2>Comments</h2>
      {comments.map(comment => (
        <div key={comment.id} className="comment">
          <p>{comment.text}</p>
          {/* Display delete button for local comments */}
          {comment.isLocal && (
            <button onClick={() => handleDelete(comment)}>Delete</button>
          )}
        </div>
      ))}
    </div>
  );
};

export default CommentList;






