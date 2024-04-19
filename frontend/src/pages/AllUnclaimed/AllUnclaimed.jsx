import AllUnclaimedCSS from "./AllUnclaimed.module.css";
import ItemCard from "../../../components/ItemCard/ItemCard";
import { useQuery } from "react-query";
import getItems from "../../../data/getItems";
import { useNavigate } from "react-router-dom";

function AllUnclaimed() {
  const { data: items } = useQuery({ queryKey: ["items"], queryFn: getItems });
  const navigate = useNavigate();

  return (
    <div id={AllUnclaimedCSS["items-container"]}>
      <h1>All unclaimed items</h1>
      <button
        className={`btn-style ${AllUnclaimedCSS["report-found-item-btn"]}`}
        onClick={() => navigate("/report-found-item")}
      >
        Report found item
      </button>
      {items?.map((itemData) => (
        <ItemCard itemData={itemData} key={itemData.itemid} />
      ))}
    </div>
  );
}

export default AllUnclaimed;
