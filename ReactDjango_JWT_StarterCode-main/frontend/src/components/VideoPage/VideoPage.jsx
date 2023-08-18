import React from 'react';
import { useParams } from 'react-router-dom';
import './VideoPage.css';

const VideoPage = () => {
  const { videoId } = useParams(); // Retrieve the video ID from the URL parameter
  

  return (
    <div className="container">
      <h1>Video Page</h1>
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
    </div>
  );
};

export default VideoPage;
