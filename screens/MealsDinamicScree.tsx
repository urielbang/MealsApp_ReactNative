import { View, Text, StyleSheet, FlatList } from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealItem";

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

  const renderMealItem = ({ item }) => {
    const mealProps = {
      affordability: item.affordability,
      duration: item.duration,
      complexity: item.complexity,
      img: item.imageUrl,
      title: item.title,
      id: item.id,
    };
    return <MealItem {...mealProps} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={filterdMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
