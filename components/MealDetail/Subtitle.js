import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Subtitle({ children }) {
  return (
    <View style={styles.containerSubtitle}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#2e20159e",
  },
  containerSubtitle: {
    padding: 6,
    borderBottomColor: "#2e20159e",
    marginHorizontal: 12,
    marginVertical: 4,
    borderBottomWidth: 2,
  },
});
