import ClothingItemsContext from "../contexts/ClothingItemsContext.js";
import { useContext } from "react";
import ItemCard from "./ItemCard.jsx";
import "../blocks/ClothesSection.css";

export default function ClothesSection({ handleAddClick }) {
  const clothing = useContext(ClothingItemsContext);
  return (
    <>
      <section className="clothes-section">
        <div className="clothes-section__text-wrapper">
          <p className="clothes-section__title">Your Items</p>
          <button
            onClick={handleAddClick}
            type="button"
            className="clothes-section__btn"
          >
            + Add new
          </button>
        </div>
        <ul className="clothes-section__card-list">
          {clothing.clothingItems.map((item) => {
            return (
              <ItemCard
                key={item._id}
                item={item}
                onCardClick={clothing.handleCardClick}
              />
            );
          })}
        </ul>
      </section>
    </>
  );
}
