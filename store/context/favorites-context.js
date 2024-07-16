import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

export default function FavoritesContextProvider({ children }) {
  const [favoriteMealId, setFavoriteMealId] = useState([]);

  const addFavorite = (id) => {
    setFavoriteMealId((currentFavIds) => [...currentFavIds, id]);
  };

  const removeFavorite = (id) => {
    setFavoriteMealId((currentFavIds) =>
      currentFavIds.filter((mealId) => mealId !== id)
    );
  };

  const value = {
    ids: favoriteMealId,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };
  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}
