import React from 'react';
import { Link } from 'react-router-dom';

const SearchResultsPage = ({ searchResults }) => {
  return (
    <div>
      <h1>Search Results</h1>
      <div className="search-results">
        {searchResults.map(video => (
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
            <Link to={`/video/${video.id.videoId}`} className='link-style'>Click here to watch video</Link>
            <h2>{video.snippet.title}</h2>
            <p>{video.snippet.description}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResultsPage;
