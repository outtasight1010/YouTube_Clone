import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CommentList from './CommentList'; 
import CommentForm from './CommentForm'; 

const HomePage1 = () => {
  const [comments, setComments] = useState([]);

  
  const fetchComments = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/comments/all/');
      setComments(response.data);
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

 
  const postComment = async (newComment) => {
    try {
      await axios.post('http://127.0.0.1:8000/api/comments/create/', newComment);
      
      fetchComments();
    } catch (error) {
      console.error('Error posting comment:', error);
    }
  };

 
  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <div>
      <h1>Comments Page</h1>
      
      <CommentForm postComment={postComment} />
      <CommentList comments={comments} />
    </div>
  );
};

export default HomePage1;
