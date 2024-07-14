import { View, Text, Pressable } from "react-native";
import React from "react";

export default function CategoryGridTile({ item }) {
  return (
    <View>
      <Pressable>
        <View>
          <Text>{item.title}</Text>
        </View>
      </Pressable>
    </View>
  );
}
