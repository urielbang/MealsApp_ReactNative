import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  Platform,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import MealDetails from "./MealDetails";

export default function MealItem({
  title,
  img,
  duration,
  complexity,
  affordability,
  id,
}) {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("MealDetails", {
      mealId: id,
    });
  };
  return (
    <View style={styles.mealItem}>
      <Pressable
        onPress={handlePress}
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.buttonPressd : null)}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: img }} style={styles.image} />
            <Text style={styles.title}> {title}</Text>
          </View>
          <MealDetails
            duration={duration}
            complexity={complexity}
            affordability={affordability}
          />
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS == "android" ? "hidden" : "visible",
    backgroundColor: "white",
    elevation: 4,
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    textShadowRadius: 8,
    shadowRadius: 8,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 28,
    margin: 8,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    justifyContent: "center",
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
  buttonPressd: {
    opacity: 0.5,
  },
});
