import RequestCardCSS from "./RequestCard.module.css";

function RequestCard({ requestData }) {
  return (
    <div className={RequestCardCSS["card-container"]}>
      <div className={RequestCardCSS["item-info-container"]}>
        <h1 className={RequestCardCSS["item-name"]}>{requestData.itemname}</h1>
        <p>Status: {requestData.status}</p>
        <p>Description: {requestData.description}</p>
        <p>Location: {requestData.location}</p>
        <p>Date lost: {requestData.datelost}</p>
      </div>
      <img
        src={
          requestData?.image ||
          `https://source.unsplash.com/random/300x200?sig=${Math.random()}`
        }
        alt=""
        className={RequestCardCSS["item-img"]}
      />
    </div>
  );
}

export default RequestCard;
