import React, { useLayoutEffect } from "react";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealsList from "../components/mealsList/MealsList";

export default function MealsDinamicScree({ route, navigation }) {
  const { categoryId } = route.params;

  const filterdMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categoryId) >= 0;
  });

  const categoryTitle = CATEGORIES.find((category) => {
    return category.id === categoryId;
  }).title;

  useLayoutEffect(() => {
    navigation.setOptions({ title: categoryTitle });
  }, []);

  return <MealsList data={filterdMeals} />;
}
