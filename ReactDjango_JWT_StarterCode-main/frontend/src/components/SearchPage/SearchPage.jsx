import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './SearchPage.css'; 
import SearchBar from '../SearchBar/SearchBar'; 
import { Link } from 'react-router-dom';

const SearchPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSearchResults = (results) => {
    setSearchResults(results);

    // Use navigate function to navigate to a new route when search results are available
    navigate('/search-results'); // Define the path you want to navigate to
  };

  return (
    <div>
      <SearchBar onSearchResults={handleSearchResults} />
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

export default SearchPage;

