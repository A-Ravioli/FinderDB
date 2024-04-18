import ItemCard from "../../../components/ItemCard/ItemCard";
import { useQuery } from "react-query";
import getClaimedItems from "../../../data/getClaimedItems";
import MyClaimsCSS from "./MyClaims.module.css";

function MyClaims() {
  const { data: items } = useQuery({
    queryKey: ["myclaims"],
    queryFn: getClaimedItems,
  });

  return (
    <div id={MyClaimsCSS['items-container']}>
    <h1>Claimed items</h1>
    {isLoading ? (
      <p>Loading...</p>
    ) : items && items.length ? (
      items.map((itemData) => <ItemCard key={itemData.id} itemData={itemData} />)
    ) : (
      <p>No claims currently</p>
    )}
  </div>

  );
}

export default MyClaims;
