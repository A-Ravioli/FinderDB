import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import ItemCard from "../../components/ItemCard/ItemCard";
import getItems from "../../data/getItems";
import AllUnclaimedCSS from "./AllUnclaimed.module.css";

function AllUnclaimed() {
  const { data: items } = useQuery({ queryKey: ["items"], queryFn: getItems });
  const navigate = useNavigate();
  // test

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
        <ItemCard itemData={itemData} />
      ))}
    </div>
  );
}

export default AllUnclaimed;
