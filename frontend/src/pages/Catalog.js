# Page listing all items in the lost and found

import React, { useEffect, useState } from 'react';
import { fetchItems } from '../services/itemsService';
import ItemCard from '../components/ItemCard';

function Catalog() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems().then(setItems).catch(console.error);
  }, []);

  return (
    <div className="catalog">
      {items.map(item => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  );
}

export default Catalog;
