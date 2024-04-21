import { useContext } from "react";
import { useQuery } from "react-query";
import ItemCard from "../../components/ItemCard/ItemCard";
import UserContext from "../../context/UserContext";
import getClaimedItems from "../../data/getClaimedItems";
import MyClaimsCSS from "./MyClaims.module.css";

function MyClaims() {
  const { user } = useContext(UserContext);

  const getClaimedItemsWithId = async () => {
    const res = await getClaimedItems(user.id);
    return res;
  };

  const { data: items } = useQuery({
    queryKey: ["myclaims"],
    queryFn: getClaimedItemsWithId,
  });

  console.log(items);

  return (
    <div id={MyClaimsCSS["items-container"]}>
      <h1>Claimed items</h1>
      {items?.length !== 0 ? (
        <>
          {items?.map((item) => {
            return <ItemCard itemData={item} />;
          })}
        </>
      ) : (
        <p>No items found</p>
      )}
    </div>
  );
}

export default MyClaims;
