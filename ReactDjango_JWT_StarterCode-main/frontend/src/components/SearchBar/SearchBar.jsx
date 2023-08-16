import './SearchBar.css';
import React, { useState } from 'react';
import axios from 'axios';


const SearchBar = ({ onSearchResults }) => {
  const [query, setQuery] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search`,
        {
          params: {
            key: 'AIzaSyCOHeaQO_PyIzcGeMyxoRBFw-BVrTBh354',
            q: query,
            part: 'snippet',
            maxResults: 5, 
          },
        }
      );
      const searchResults = response.data.items;
      onSearchResults(searchResults);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  return (
    <div className = 'search-bar'>
      <input
        type="text"
        placeholder="Search for videos..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;

  
