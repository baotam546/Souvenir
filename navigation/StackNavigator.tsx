import { View, Text } from "react-native";
import React from "react";

import SearchScreen from "../screens/SearchScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import About from "../screens/About";
import CheckoutScreen from "../screens/CheckoutScreen";
import ShoppingBagScreen from "../screens/ShoppingBagScreen";
import PaycheckScreen from "../screens/PaycheckScreen";

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

const CheckOutStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="checkout-screen" component={CheckoutScreen} />
      <Stack.Screen name="shopping-screen" component={ShoppingBagScreen} />
      <Stack.Screen name="paycheck-screen" component={PaycheckScreen} />
    </Stack.Navigator>
  );
};

export { CheckOutStackNavigator, SearchStackNavigator, MainStackNavigator };
