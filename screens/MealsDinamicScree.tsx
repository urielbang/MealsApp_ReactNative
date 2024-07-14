import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { MEALS } from "../data/dummy-data";

export default function MealsDinamicScree() {
  return (
    <View style={styles.container}>
      <Text>Meals overview Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
