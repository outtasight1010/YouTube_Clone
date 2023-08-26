import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './VideoPlayer.css';
import RelatedVideos from '../RelatedVideos/RelatedVideos';
import CommentList from '../CommentList/CommentList';
import Comment from '../Comments/Comments';


const VideoPlayer = ({ videos }) => {
  const { videoId } = useParams(); 
  const mainVideo = videos.find(video => video.id === videoId);
  const relatedVideos = videos.filter(video => video.id !== videoId);
  const [entries, setEntries] =useState([])
  const [comments, setComments] = useState([]);
  
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/comments/all/`
        );
        // Filtering comments based on the provided videoId
        const commentsForVideo = response.data.filter(
          comment => comment.video_id === videoId
        );
        setEntries(commentsForVideo);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    fetchComments();
  }, [videoId]);

  
  function addNewEntry(entry) {

    let tempEntries = [entry, ...comments];

    setEntries(tempEntries);
  }

  return (
    <div className="container">
      <h1>Video Player</h1>
      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <CommentList videoId={videoId} />
      
      <Comment videoId={videoId} addNewEntryProp={addNewEntry} />
      <RelatedVideos videos={relatedVideos} />
    </div>
  );
};

export default VideoPlayer;



