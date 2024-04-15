import { useEffect, useState } from "react";
import HomeCSS from "./Home.module.css";
import ItemCard from "../../../components/ItemCard/ItemCard";

function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("/api/all-items")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
  }, []);

  return (
    <div id={HomeCSS["items-container"]}>
      {items.map((itemData) => (
        <ItemCard itemData={itemData} />
      ))}
    </div>
  );
}

export default Home;
