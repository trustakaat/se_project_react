import "../blocks/DeleteConfirmationModal.css";
import close from "../assets/close.svg";

function DeleteConfirmationModal({
  activeModal,
  onClose,
  card,
  handleDeleteItem,
}) {
  return (
    <div className={`modal ${activeModal === "confirm" ? "modal_open" : ""}`}>
      <div className="modal__content modal__content_type_confirm">
        <button onClick={onClose} type="button" className="modal__close-btn">
          <img src={close} alt="close icon" />
        </button>
        <h2 className="modal__warning-text">
          Are you sure you want to delete this item? This action is
          irreversible.
        </h2>
        <div className="modal__btn_container">
          <button
            type="button"
            onClick={() => handleDeleteItem(card._id)}
            className="modal__delete-button"
          >
            Yes, delete item
          </button>
          <button type="button" onClick={onClose} className="modal__cancel-btn">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
export default DeleteConfirmationModal;
