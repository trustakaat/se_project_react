import "../blocks/ItemModal.css";
import close from "../assets/close.svg";

function ItemModal({ activeModal, onClose, card, handleDeleteClick }) {
  return (
    <div className={`modal ${activeModal === "preview" ? "modal_open" : ""}`}>
      <div className="modal__content modal__content_type_image">
        <button onClick={onClose} type="button" className="modal__close-btn">
          <img src={close} alt="close icon" />
        </button>
        <img src={card.link} alt={card.name} className="modal__image" />
        <div className="modal__footer">
          <div className="Modal__footer-description">
            <h2 className="modal__caption">{card.name}</h2>
            <p className="modal__weather">Weather: {card.weather}</p>
          </div>
          <button
            type="button"
            onClick={handleDeleteClick}
            className="modal__delete-btn"
          >
            Delete item
          </button>
        </div>
      </div>
    </div>
  );
}
export default ItemModal;
