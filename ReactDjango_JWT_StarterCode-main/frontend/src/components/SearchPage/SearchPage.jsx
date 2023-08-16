
import React, { useState } from 'react';
//import { useNavigate } from 'react-router-dom';
import './SearchPage.css'; 
import SearchBar from '../SearchBar/SearchBar'; 

//const API_KEY = 'AIzaSyCOHeaQO_PyIzcGeMyxoRBFw-BVrTBh354'; //my API key
//const SEARCH_QUERY = 'rockybalboa';


const SearchPage = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchResults = (results) => {
    setSearchResults(results);
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
            <h2>{video.snippet.title}</h2>
            <p>{video.snippet.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
