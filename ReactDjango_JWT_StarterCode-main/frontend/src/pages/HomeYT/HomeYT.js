import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

import axios from "axios";

const HomeYT = () => {
  
  const [user, token] = useAuth();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        let response = await axios.get("http://127.0.0.1:8000/api/comments/all", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setComments(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchComments();
  }, [token]);
  return (
    <div className="container">
      <h1>Home Page for {user.username}!</h1>
      {comments &&
        comments.map((comment) => (
          <p key={comment.id}>
            {comment.text} {comment.likes} {comment.dislikes}
          </p>
        ))}
    </div>
  );
};

export default HomeYT;
