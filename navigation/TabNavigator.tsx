import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CheckOutStackNavigator, HomeStackNavigator } from "./StackNavigator";
import { MaterialIcons } from "@expo/vector-icons";
import Header from "../components/Header";
const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "gray",
        unmountOnBlur:true
      }}
    >
      <Tab.Screen
        name="home"
        component={HomeStackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="checkout"
        component={CheckOutStackNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons
              name="shopping-cart-checkout"
              size={size}
              color={color}
            />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
