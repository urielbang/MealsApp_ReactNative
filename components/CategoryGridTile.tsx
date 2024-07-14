import { View, Text, Pressable, StyleSheet, Platform } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function CategoryGridTile({ title, color, onPress }) {
  const navigation = useNavigation();

  return (
    <View style={styles.gridItem}>
      <Pressable
        onPress={onPress}
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.button,
          styles,
          pressed ? styles.buttonPressd : null,
        ]}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    textShadowRadius: 8,
    backgroundColor: "white",
    overflow: Platform.OS == "android" ? "hidden" : "visible",
  },
  button: { flex: 1 },
  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  buttonPressd: {
    opacity: 0.5,
  },
});
