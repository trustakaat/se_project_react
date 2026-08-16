import { createContext } from "react";

const ClothingItemsContext = createContext({
  clothingItems: [],
  handleCardClick: () => {},
});

export default ClothingItemsContext;
