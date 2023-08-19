import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './VideoPlayer.css';
import RelatedVideos from '../RelatedVideos/RelatedVideos';


const VideoPlayer = ({ videos }) => {
  const { videoId } = useParams(); // Retrieve the video ID from the URL parameter
  const mainVideo = videos.find(video => video.id === videoId);
  // Filter out the clicked video to get the related video
  const relatedVideos = videos.filter(video => video.id !== videoId);

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
      <RelatedVideos videos={relatedVideos} />
    </div>
  );
};

export default VideoPlayer;



