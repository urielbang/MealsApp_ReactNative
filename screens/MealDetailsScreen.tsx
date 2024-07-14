import { View, Text } from "react-native";
import React from "react";

export default function MealDetailsScreen({ route }) {
  const { id } = route.params;
  return (
    <View>
      <Text>MealDetailsScreen</Text>
      <Text>{id}</Text>
    </View>
  );
}
