import { View, Text } from "react-native";
import React from "react";

import SearchScreen from "../screens/SearchScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import About from "../screens/About";

const Stack = createNativeStackNavigator();
const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="home-screen" component={HomeScreen} />
      <Stack.Screen name="about-screen" component={About} />
    </Stack.Navigator>
  );
};

const SearchStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="search" component={SearchScreen} />
    </Stack.Navigator>
  );
};

export { SearchStackNavigator, MainStackNavigator };
