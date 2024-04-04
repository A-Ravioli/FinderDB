import React from 'react';
import './ItemCard.css'; // Assuming you have a corresponding CSS file for styling

function ItemCard({ item }) {
  return (
    <div className="item-card">
      <img src={item.image_url} alt={item.name} className="item-image" />
      <div className="item-info">
        <h3 className="item-name">{item.name}</h3>
        <p className="item-description">{item.description}</p>
        <p className="item-location">Location: {item.location}</p>
      </div>
    </div>
  );
}

export default ItemCard;
