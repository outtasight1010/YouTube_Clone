import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CommentList from '../CommentList/CommentList';
import CommentForm from '../CommentForm/CommentForm';
import axios from 'axios';
import './VideoPage.css';


const VideoPage = () => {
    const { videoId } = useParams();
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/comments/all/`, {
                    params: {
                        video_id: videoId,
                    },
                });
                setComments(response.data);
            } catch (error) {
                console.error('Error fetching comments:', error);
            }
        };

        fetchComments();
    }, [videoId]);

    return (
        <div className="container">
            <h1>Video Page</h1>
            <div className="video-container">
               
            </div>
            <div className="comments-container">
                <h2>Comments</h2>
                {comments.map(comment => (
                    <div key={comment.id} className="comment">
                        <p>{comment.text}</p>
                    </div>
                    
                ))}
            </div>
            

        </div>
    );
};

export default VideoPage;

