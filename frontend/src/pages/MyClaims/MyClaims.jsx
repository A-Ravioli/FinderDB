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
    <div id={MyClaimsCSS["items-container"]}>
      <h1>Claimed items</h1>
      {items?.length !== 0 ? (
        <div>
          {items.map((item) => {
            return <ItemCard itemData={item} />;
          })}
        </div>
      ) : (
        <p>No items found</p>
      )}
    </div>
  );
}

export default MyClaims;
