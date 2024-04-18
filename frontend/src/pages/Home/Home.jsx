import HomeCSS from "./Home.module.css";
import ItemCard from "../../../components/ItemCard/ItemCard";
import { useQuery } from "react-query";
import getItems from "../../../data/getItems";

function Home() {
  const { data: items } = useQuery({ queryKey: ["items"], queryFn: getItems });

  return (
    <div id={HomeCSS["items-container"]}>
      <h1>Unclaimed items</h1>
      {items?.map((itemData) => (
        <ItemCard itemData={itemData} key={itemData.itemid}/>
      ))}
    </div>
  );
}

export default Home;
