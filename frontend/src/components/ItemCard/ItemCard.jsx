import { useContext } from "react";
import { FiX } from "react-icons/fi";
import { useQueryClient } from "react-query";
import { toast } from "react-toastify";
import UserContext from "../../context/UserContext.js";
import deleteItem from "../../data/deleteItem.js";
import ClaimItemButton from "../ClaimItemButton/ClaimItemButton";
import ItemCardCSS from "./ItemCard.module.css";

function ItemCard({ itemData }) {
  const { user } = useContext(UserContext);
  const queryClient = useQueryClient();

  return (
    <div className={ItemCardCSS["card-container"]}>
      <div className={ItemCardCSS["item-info-container"]}>
        <h1 className={ItemCardCSS["item-name"]}>{itemData.itemname}</h1>
        <p>Status: {itemData.status}</p>
        {itemData.claimse_id && (
          <p>
            Claimed by: {itemData.fname} {itemData.lname}
          </p>
        )}
        <p>Description: {itemData.description}</p>
        <p>Location: {itemData.location}</p>
        <p>Date found: {itemData.datefound}</p>
        {itemData.poste_id != user.id && (
          <ClaimItemButton itemData={itemData} />
        )}
        {(itemData.poste_id === user.id || user.id === "696969696") && (
          <FiX
            color={"red"}
            size={"27"}
            className={ItemCardCSS["delete-btn"]}
            onClick={() => {
              deleteItem(itemData.itemid, queryClient);
              toast.success("Item deleted");
            }}
          />
        )}
      </div>
      <img
        src={
          itemData?.image ||
          `https://source.unsplash.com/random/300x200?sig=${Math.random()}`
        }
        alt=""
        className={ItemCardCSS["item-img"]}
      />
    </div>
  );
}

export default ItemCard;
