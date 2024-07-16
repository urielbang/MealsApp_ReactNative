import React, { useContext } from "react";
import MealsList from "../components/mealsList/MealsList";
import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";

export default function FavoriteScreen() {
  const favorites = useContext(FavoritesContext);

  const itemsMeals = MEALS.filter((meal) => favorites.ids.includes(meal.id));

  return <MealsList data={itemsMeals} />;
}
