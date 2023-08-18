import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './HomeVideo.css';

const API_KEY = 'AIzaSyCOHeaQO_PyIzcGeMyxoRBFw-BVrTBh354';
const DEFAULT_SEARCH_QUERY = 'rocky balboa';

const videoId = 'D_Vg4uyYwEk'
const HomeVideo = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/search`,
          {
            params: {
              key: API_KEY,
              q: DEFAULT_SEARCH_QUERY,
              part: 'snippet',
              maxResults: 5,
            },
          }
        );
        setVideos(response.data.items);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div className="container">
      <h1>Home Page</h1>
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
            <Link to={`/video/${video.id.videoId}`}>Watch video</Link>
            <h2>{video.snippet.title}</h2>
            <p>{video.snippet.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeVideo;





//AIzaSyCOHeaQO_PyIzcGeMyxoRBFw-BVrTBh354