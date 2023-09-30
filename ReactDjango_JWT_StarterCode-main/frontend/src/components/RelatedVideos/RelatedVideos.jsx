import React from 'react';
import './RelatedVideos.css'; 

const RelatedVideos = ({ videos }) => {
  return (
    <div className="related-videos">
      <h2>Related Videos</h2>
      <div className="video-grid">
        {videos.map(video => (
          <div key={video.id.videoId} className="video-card">
            <iframe
              width="175"
              height="125"
              src={`https://www.youtube.com/embed/${video.id.videoId}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <h3>{video.title}</h3>
            <p>{video.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedVideos;

