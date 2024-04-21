import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ItemCard from "../../components/ItemCard/ItemCard";
import {
  default as SearchPageCSS,
  default as styles,
} from "./SearchPage.module.css";

const useQuery = () => new URLSearchParams(useLocation().search);

const SearchPage = () => {
  const [items, setItems] = useState([]);
  const query = useQuery();
  console.log(items);

  useEffect(() => {
    const searchTerm = query.get("q");
    const params = new URLSearchParams({
      query: searchTerm,
    });

    if (searchTerm) {
      fetch(`/api/search?` + params)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          setItems(data);
        })
        .catch((error) => {
          console.error(
            "There was an error fetching the search results:",
            error
          );
        });
    }
  }, []);

  return (
    <div className={styles.searchResultsContainer}>
      <h2>Search Results</h2>
      {items.length > 0 ? (
        <ul className={SearchPageCSS["items-container"]}>
          {items.map((item) => (
            <ItemCard itemData={item} />
          ))}
        </ul>
      ) : (
        <p className={styles.noResultsMessage}>No items found.</p>
      )}
    </div>
  );
};

export default SearchPage;
