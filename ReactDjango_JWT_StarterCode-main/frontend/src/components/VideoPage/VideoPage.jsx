import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import CommentList from '../CommentList/CommentList';
import CommentForm from '../CommentForm/CommentForm';
import './VideoPage.css';

const VideoPage = ({ videos }) => {
  const { videoId } = useParams();
  const [comments, setComments] = useState([]);
  const handleCommentSubmit = (newComment) => {
    setComments((prevComments) => [...prevComments, newComment]);
  };


  // Find the selected video from the videos array using videoId
  const selectedVideo = videos.find(video => video.id.videoId === videoId);

  if (!selectedVideo) {
    return <div>Video not found</div>;
  }

  const { snippet } = selectedVideo;

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
        <h2>{snippet.title}</h2>
        <p>{snippet.description}</p>
        <CommentForm videoId={videoId} />
        <CommentList videoId={videoId} />
      </div>
    </div>
  );
};

export default VideoPage;
