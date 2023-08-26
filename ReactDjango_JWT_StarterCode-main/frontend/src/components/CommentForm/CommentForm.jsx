import React, { useState } from "react";
import axios from "axios";
import './CommentForm.css';

const CommentForm = (props) => {
  const [commentText, setCommentText] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    let newEntry = {
      commentText
     
    };
    console.log(newEntry);
    props.addNewEntryProp(newEntry)

    
    // we are sending name and post to an API
    //Clear the form fields after submission
    
  }

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
        <button type="submit"style={{ width: "60px", height: "30px", font:"small-caption"}}>Submit</button>
      </form>
    </div>
  );
};

export default CommentForm;
