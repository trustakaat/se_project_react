import ModalWithForm from "./ModalWithForm";
import { useForm } from "../Hooks/useForm";
import { useEffect } from "react";

const AddItemModal = ({ isOpen, onAddItem, onClose }) => {
  const defaultValues = {
    name: "",
    imageUrl: "",
    weather: "",
  };

  const { values, handleChange, setValues, setErrors, errors, isValid } =
    useForm(defaultValues);

  useEffect(() => {
    setValues(defaultValues);
    setErrors({});
  }, [isOpen]);

  function handleSubmit(evt) {
    evt.preventDefault();
    onAddItem(values);
  }

  return (
    <ModalWithForm
      buttonText="Add garment"
      title="New garment"
      onClose={onClose}
      onAddItem={handleSubmit}
      isOpen={isOpen}
      isValid={isValid}
    >
      <label htmlFor="name" className="modal__label">
        Name
        <input
          type="text"
          className="modal__input"
          id="name"
          placeholder="Name"
          name="name"
          value={values.name}
          onChange={handleChange}
          minLength="3"
          required
        />
        <span className="Modal__error" id="name-error">
          {errors.name}
        </span>
      </label>
      <label htmlFor="imageurl" className="modal__label">
        Image
        <input
          type="url"
          className="modal__input"
          id="imageurl"
          placeholder="Image URL"
          name="imageUrl"
          value={values.imageUrl}
          onChange={handleChange}
          required
        />
        <span className="Modal__error" id="name-error">
          {errors.imageUrl}
        </span>
      </label>
      <fieldset className="modal__radio-btns">
        <legend className="modal__legend">Select the weather type:</legend>
        <label htmlFor="hot" className="modal__label modal__label_type_radio">
          <input
            type="radio"
            className="modal__radio-input"
            id="hot"
            name="weather"
            value="hot"
            checked={values.weather === "hot"}
            onChange={handleChange}
            required
          />{" "}
          Hot{" "}
          <span className="Modal__error" id="name-error">
            {errors.weather}
          </span>
        </label>
        <label htmlFor="warm" className="modal__label modal__label_type_radio">
          <input
            type="radio"
            className="modal__radio-input"
            id="warm"
            name="weather"
            value="warm"
            checked={values.weather === "warm"}
            onChange={handleChange}
            required
          />{" "}
          Warm{" "}
          <span className="Modal__error" id="name-error">
            {errors.weather}
          </span>
        </label>
        <label htmlFor="cold" className="modal__label modal__label_type_radio">
          <input
            type="radio"
            className="modal__radio-input"
            id="cold"
            name="weather"
            value="cold"
            checked={values.weather === "cold"}
            onChange={handleChange}
            required
          />{" "}
          Cold{" "}
          <span className="Modal__error" id="name-error">
            {errors.weather}
          </span>
        </label>
      </fieldset>
    </ModalWithForm>
  );
};

export default AddItemModal;
