import { View, Text } from "react-native";
import React from "react";

import SearchScreen from "../screens/SearchScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import About from "../screens/About";
import CheckoutScreen from "../screens/CheckoutScreen";
import ShoppingBagScreen from "../screens/ShoppingBagScreen";
import PaycheckScreen from "../screens/PaycheckScreen";
import ProductListScreen from "../screens/ProductList/ProductListScreen";
import HeaderWithBackButton from "../components/HeaderWithBackButton";
import Header from "../components/Header";
import ProductDetailsScreen from "../screens/ProductDetails/ProductDetailsScreen";
import HeaderDetails from "../screens/ProductDetails/components/HeaderDetails";
import Paypal from "../screens/Paypal";
import SuccessScreen from "../screens/SuccessScreen";
import CreateAddress from "../screens/CreateAddress";

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
          header: () => <HeaderWithBackButton title="All Items" />,
        }}
        name="productList-screen"
        component={ProductListScreen}
      />
      <Stack.Screen name="about-screen" component={About} />
      <Stack.Screen
        options={{
          header: () => <HeaderDetails />,
        }}
        name="productDetails-screen"
        component={ProductDetailsScreen}
      />
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
    <Stack.Navigator initialRouteName="checkout-screen">
      <Stack.Screen
        name="checkout-screen"
        component={CheckoutScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="shopping-screen" component={ShoppingBagScreen} />
      <Stack.Screen
        name="paycheck-screen"
        component={PaycheckScreen}
        options={{
          headerTitle: "Paycheck",
        }}
      />
      <Stack.Screen
        name="paypal-webview"
        options={{
          headerTitle: "Paypal payment",
        }}
        component={Paypal}
        initialParams={{ paypalUrl: "https://your-paypal-url.com" }}
      />
      <Stack.Screen name="successScreen" component={SuccessScreen} />
      <Stack.Screen name="Create Address" component={CreateAddress} />
    </Stack.Navigator>
  );
};

export { CheckOutStackNavigator, SearchStackNavigator, HomeStackNavigator };
