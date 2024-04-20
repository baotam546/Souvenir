import { View, Text } from "react-native";
import React from "react";

import SearchScreen from "../screens/SearchScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import About from "../screens/About";
import ProductListScreen from "../screens/ProductList/ProductListScreen";
import HeaderWithBackButton from "../components/HeaderWithBackButton";
import Header from "../components/Header";
import ProductDetailsScreen from "../screens/ProductDetails/ProductDetailsScreen";
import HeaderDetails from "../screens/ProductDetails/components/HeaderDetails";

const Stack = createNativeStackNavigator();
const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => <Header />,
      }}
    >
      <Stack.Screen name="home-screen" component={HomeScreen} />
      <Stack.Screen
      options={{
        header: () => <HeaderWithBackButton title="All Items"/>
       }}
      name="productList-screen" component={ProductListScreen} />
      <Stack.Screen name="about-screen" component={About} />
      <Stack.Screen
      options={{
       header: () => <HeaderDetails/>
       }}
      name= "productDetails-screen" component={ProductDetailsScreen}/>
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


export { SearchStackNavigator,  HomeStackNavigator };
