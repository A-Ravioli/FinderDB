import { useEffect, useState } from "react";
import HomeCSS from "./Home.module.css";
import ItemCard from "../../../components/ItemCard/ItemCard";

function Home() {
  return (
    <div id={HomeCSS["items-container"]}>
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
    </div>
  );
}

export default Home;
