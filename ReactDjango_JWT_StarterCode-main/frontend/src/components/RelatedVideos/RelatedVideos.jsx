import React from 'react';
import './RelatedVideos.css'; // Apply your styles here

const RelatedVideos = ({ videos }) => {
  return (
    <div className="related-videos">
      <h2>Related Videos</h2>
      <div className="video-grid">
        {videos.map(video => (
          <div key={video.id} className="video-card">
            <iframe
              width="200"
              height="150"
              src={`https://www.youtube.com/embed/${video.id}`}
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
