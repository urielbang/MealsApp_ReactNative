import React from "react";
import MealsList from "../components/mealsList/MealsList";
// import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

export default function FavoriteScreen() {
  // const favorites = useContext(FavoritesContext);

  const favoritesIds = useSelector((state) => state.favoriteMeals.ids);

  const itemsMeals = MEALS.filter((meal) => favoritesIds.includes(meal.id));

  if (itemsMeals?.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>you have no favorites meals yet...</Text>
      </View>
    );
  }

  return <MealsList data={itemsMeals} />;
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
