import { View, StyleSheet, FlatList } from "react-native";
import React from "react";
import MealItem from "./MealItem";

export default function MealsList({ data }) {
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
        data={data}
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
