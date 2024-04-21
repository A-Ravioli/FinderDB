import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './SearchBar.module.css';

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const encodedSearchInput = encodeURIComponent(searchInput);
    navigate(`/search?q=${encodedSearchInput}`);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.searchBarContainer}>
      <input
        type="search"
        placeholder="Search for items"
        onChange={(e) => setSearchInput(e.target.value)}
        value={searchInput}
        className={styles.searchInput}
      />
      <button type="submit" className={styles.searchButton}>Search</button>
    </form>
  );
};

export default SearchBar;
