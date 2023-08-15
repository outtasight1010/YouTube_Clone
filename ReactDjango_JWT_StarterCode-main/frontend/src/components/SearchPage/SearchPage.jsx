import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './SearchPage.css'; // Apply your styles here
import SearchBar from '../SearchBar/SearchBar'; // Import the correct path

const API_KEY = 'AIzaSyA48Og_bmU2yVzGDjrFc5pibu6EmwwJj0Y'; // Replace with your API key
const SEARCH_QUERY = 'rockybalboa';


const SearchPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSearchResults = (results) => {
    setSearchResults(results);

    // Navigate to the search results page
    navigate('/search-results');
  };

  return (
    <div>
      <SearchBar onSearchResults={handleSearchResults} />
      <div className="search-results">
        {searchResults.map(video => (
          <div key={video.id.videoId} className="video-card">
            {/* Display video */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
