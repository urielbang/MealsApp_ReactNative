import { Text, Image, StyleSheet, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import HeaderButton from "../components/HeaderButton";

export default function MealDetailsScreen({ route, navigation }) {
  const { mealId } = route.params;

  const filterdMeals = MEALS.find((meal) => {
    return meal.id === mealId;
  });

  const handleHeaderPress = () => {
    console.log("Preesd");
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <HeaderButton onPress={handleHeaderPress} color="white" icon="star" />
        );
      },
    });
  }, [navigation, handleHeaderPress]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: filterdMeals.imageUrl }} />
      <Text style={styles.title}>{filterdMeals.title}</Text>
      <MealDetails
        duration={filterdMeals.duration}
        complexity={filterdMeals.complexity}
        affordability={filterdMeals.affordability}
      />
      <Subtitle>Ingredients</Subtitle>
      <List data={filterdMeals.ingredients} />
      <Subtitle>Steps</Subtitle>
      <List data={filterdMeals.steps} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 300,
  },
  title: { fontWeight: "bold", fontSize: 24, alignSelf: "center" },
});
