import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const encodedSearchInput = encodeURIComponent(searchInput);
    navigate(`/search?q=${encodedSearchInput}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Search for items"
        onChange={(e) => setSearchInput(e.target.value)}
        value={searchInput}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
