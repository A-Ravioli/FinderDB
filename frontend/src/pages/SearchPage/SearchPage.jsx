import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './SearchPage.module.css';

const useQuery = () => new URLSearchParams(useLocation().search);

const SearchPage = () => {
  const [items, setItems] = useState([]);
  const query = useQuery();

  useEffect(() => {
    const searchTerm = query.get("q");
    if (searchTerm) {
      fetch(`/api/search?q=${encodeURIComponent(searchTerm)}`)
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
    <div className={styles.searchResultsContainer}>
      <h2>Search Results</h2>
      {items.length > 0 ? (
        <ul>
          {items.map((item, index) => (
            <li key={index} className={styles.searchResultItem}>
              <h3 className={styles.searchResultHeader}>{item.ItemName}</h3>
              <p className={styles.searchResultText}>{item.Description}</p>
              {/* ... other parts of the item */}
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles.noResultsMessage}>No items found.</p>
      )}
    </div>
  );
};

export default SearchPage;
