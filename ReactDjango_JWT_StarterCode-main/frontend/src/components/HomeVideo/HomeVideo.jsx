import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './HomeVideo.css';
import CommentList from '../CommentList/CommentList';
import CommentForm from '../CommentForm/CommentForm';
import useAuth from '../../hooks/useAuth'; 

const API_KEY = 'AIzaSyA48Og_bmU2yVzGDjrFc5pibu6EmwwJj0Y';
const DEFAULT_SEARCH_QUERY = 'rocky balboa';


const HomeVideo = () => {
  const [videos, setVideos] = useState([]);
  const { isAuthenticated } = useAuth(); 

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
      <h1>Videos Home</h1>
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
            <Link to={`/video/${video.id.videoId}`} className = 'link-style'>Click here to watch video</Link>
            <h2>{video.snippet.title}</h2>
            <p>{video.snippet.description}</p>
            
          </div>
        ))}
      </div>
      {isAuthenticated && <CommentForm />}
    </div>
  );
};

export default HomeVideo;





