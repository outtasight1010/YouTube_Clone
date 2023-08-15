import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './VideoPage.css';

const API_KEY = 'AIzaSyA48Og_bmU2yVzGDjrFc5pibu6EmwwJj0Y';
const SEARCH_QUERY = 'rocky balboa';

const VideoPage = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&q=${SEARCH_QUERY}`);
        const videoData = response.data.items;
        setVideos(videoData);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div className="video-grid">
      {videos.map(video => (
        <div key={video.id.videoId} className="video-card">
          <iframe
            width="200"
            height="150"
            src={`https://www.youtube.com/embed/${video.id.videoId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      ))}
    </div>
  );
};

export default VideoPage;
