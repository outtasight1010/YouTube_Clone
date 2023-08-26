import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './VideoPlayer.css';
import RelatedVideos from '../RelatedVideos/RelatedVideos';
import CommentList from '../CommentList/CommentList';
import CommentForm from '../CommentForm/CommentForm';


const VideoPlayer = ({ videos }) => {
  const { videoId } = useParams(); 
  const mainVideo = videos.find(video => video.id === videoId);
  const relatedVideos = videos.filter(video => video.id !== videoId);
  const [entries, setEntries] =useState([])
  function addNewEntry(entry) {

    let tempEntries = [entry, ...entries];

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
      <CommentForm addNewEntryProp={addNewEntry} />
      <RelatedVideos videos={relatedVideos} />
    </div>
  );
};

export default VideoPlayer;



