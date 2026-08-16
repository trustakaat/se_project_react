import { useEffect, useState } from "react";

import { Routes, Route } from "react-router-dom";
import { coordinates, apiKey } from "../utils/constants";
import { getItems, addItem, deleteItem } from "../utils/api";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ModalWithForm from "./ModalWithForm";
import ItemModal from "./ItemModal";
import { filterWeatherData, getWeather } from "../utils/weatherApi";
import "../blocks/App.css";
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext.js";
import AddItemModal from "./AddItemModal.jsx";
import Profile from "./Profile.jsx";
import ClothingItemsContext from "../contexts/ClothingItemsContext.js";
import DeleteConfirmationModal from "./DeleteConfirmationModal.jsx";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999, C: 999 },
    city: "",
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [clothingItems, setClothingItems] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");

  const handleToggleClick = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    getItems()
      .then((data) => {
        setClothingItems(data);
      })
      .catch(console.error);
  }, []);

  const handleAddItemSubmit = ({ name, link, weather }) => {
    addItem({ name, link, weather })
      .then((newItem) => {
        setClothingItems([newItem, ...clothingItems]);
        closeActiveModal();
      })
      .catch(console.error);
  };

  const handleDeleteItem = (id) => {
    deleteItem(id)
      .then(() => {
        setClothingItems((prevItems) =>
          prevItems.filter((item) => item._id !== id),
        );
        closeActiveModal();
      })
      .catch(console.error);
  };

  const handleToggleSwitchChange = () => {
    currentTemperatureUnit === "F"
      ? setCurrentTemperatureUnit("C")
      : setCurrentTemperatureUnit("F");
  };

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const handleDeleteClick = () => {
    setActiveModal("confirm");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  useEffect(() => {
    getWeather(coordinates, apiKey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="page">
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <ClothingItemsContext.Provider
          value={{ clothingItems, handleCardClick }}
        >
          <div className="page__content">
            <Header
              handleAddClick={handleAddClick}
              weatherData={weatherData}
              toggle={toggle}
              handleToggleClick={handleToggleClick}
            />
            <Routes>
              <Route
                path="/"
                element={
                  <Main
                    weatherData={weatherData}
                    handleCardClick={handleCardClick}
                    clothingItems={clothingItems}
                  />
                }
              />
              <Route
                path="/profile"
                element={<Profile handleAddClick={handleAddClick} />}
              />
            </Routes>

            <Footer />
          </div>
          <AddItemModal
            activeModal={activeModal}
            onClose={closeActiveModal}
            isOpen={activeModal === "add-garment"}
            onAddItem={handleAddItemSubmit}
          />
          <ItemModal
            handleDeleteClick={handleDeleteClick}
            activeModal={activeModal}
            card={selectedCard}
            onClose={closeActiveModal}
          />
          <DeleteConfirmationModal
            activeModal={activeModal}
            card={selectedCard}
            onClose={closeActiveModal}
            handleDeleteItem={handleDeleteItem}
          />
        </ClothingItemsContext.Provider>
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
