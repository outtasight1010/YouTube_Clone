// SearchBar.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate(); // Get the navigation function
  
    const handleSearch = () => {
      if (searchTerm.trim()) {
        navigate(`/search/${searchTerm}`); // Use navigate function to navigate
      }
    };
  
    return (
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search videos..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    );
  };
  
  export default SearchBar;
  
