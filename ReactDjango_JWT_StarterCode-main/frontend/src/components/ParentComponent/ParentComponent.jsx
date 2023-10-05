// ParentComponent.js
import React, { useState } from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';

const ParentComponent = () => {
  const [comments, setComments] = useState([]);

  const addNewComment = (newComment) => {
    
    setComments([...comments, newComment]);
  };

  return (
    <div>
      <CommentForm addNewComment={addNewComment} />
      <CommentList comments={comments} />
    </div>
  );
};

export default ParentComponent;
