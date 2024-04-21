import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useQuery = () => new URLSearchParams(useLocation().search);

const SearchPage = () => {
  const [items, setItems] = useState([]);
  const query = useQuery();

  useEffect(() => {
    const searchTerm = query.get("q");
    if (searchTerm) {
      fetch(`/api/search-items?q=${encodeURIComponent(searchTerm)}`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          setItems(data);
        })
        .catch(error => {
          console.error('There was an error fetching the search results:', error);
        });
    }
  }, [query]);

  return (
    <div>
      <h2>Search Results</h2>
      {items.length > 0 ? (
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <h3>{item.ItemName}</h3>
              <p>{item.Description}</p>
              {/* Optionally display image if exists */}
              {item.Image && <img src={item.Image} alt={item.ItemName} style={{ width: '100px' }} />}
              <p>Found on: {new Date(item.DateFound).toLocaleDateString()}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No items found.</p>
      )}
    </div>
  );
};

export default SearchPage;
