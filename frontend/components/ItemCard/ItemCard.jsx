import ClaimItemButton from "../ClaimItemButton/ClaimItemButton";
import ItemCardCSS from "./ItemCard.module.css";

function ItemCard({ itemData }) {
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
        <ClaimItemButton itemData={itemData} />
      </div>
      <img
        src="https://i.kym-cdn.com/entries/icons/facebook/000/048/633/Screenshot_2024-02-27_at_1.49.23_PM.jpg"
        alt=""
        className={ItemCardCSS["item-img"]}
      />
    </div>
  );
}

export default ItemCard;
