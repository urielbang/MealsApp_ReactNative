import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MealsDinamicScree from "./screens/MealsDinamicScree";
import MealDetailsScreen from "./screens/MealDetailsScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavoriteScreen from "./screens/FavoriteScreen";
import { Ionicons } from "@expo/vector-icons";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function drawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#24180f" },
        headerTintColor: "white",
        sceneContainerStyle: { backgroundColor: "#2e20159e" },
        drawerContentStyle: { backgroundColor: "#24180f" },
        drawerInactiveTintColor: "white",

        drawerActiveTintColor: "#24180f",
        drawerActiveBackgroundColor: "#866d5a9e",
      }}
    >
      <Drawer.Screen
        name="categories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ size, color }) => (
            <Ionicons name="list" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="favorites"
        component={FavoriteScreen}
        options={{
          title: "Favorites",
          drawerIcon: ({ size, color }) => (
            <Ionicons name="star" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#24180f" },
            headerTintColor: "white",
            cardStyle: { backgroundColor: "#2e20159e" },
          }}
        >
          <Stack.Screen
            name="MealsCategories"
            component={drawerNavigator}
            options={{
              title: "All Categories",
              headerShown: false,
            }}
          />
          <Stack.Screen name="MealsDinamic" component={MealsDinamicScree} />
          <Stack.Screen
            name="MealDetails"
            component={MealDetailsScreen}
            options={{ title: "About the Meal" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
