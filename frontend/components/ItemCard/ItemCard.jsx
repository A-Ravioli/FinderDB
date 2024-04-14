import ItemCardCSS from "./ItemCard.module.css";

function ItemCard() {
  return (
    <div id={ItemCardCSS["card-container"]}>
      <img src="" alt="" />
      <div id={ItemCardCSS["item-info-container"]}>
        <h1 id={ItemCardCSS["item-name"]}>Item name</h1>
        <p>Status</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          exercitationem voluptatibus esse iusto tempora cupiditate deserunt
          culpa illum et fuga odit doloribus excepturi rem, neque, temporibus
          labore ut dolore debitis. Asperiores autem hic, ex perferendis ipsum
          atque alias neque magni.
        </p>
      </div>
    </div>
  );
}

export default ItemCard;
