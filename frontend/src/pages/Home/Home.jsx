import HomeCSS from "./Home.module.css";
import ItemCard from "../../../components/ItemCard/ItemCard";
import { useQuery } from "react-query";
import getItems from "../../../data/getItems";
import { useNavigate } from "react-router-dom";

function Home() {
  return (
    <div id={HomeCSS["items-container"]}>
      <h1>Search</h1>
    </div>
  );
}

export default Home;
