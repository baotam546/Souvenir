import React from "react";
import InitialScreen from "../screens/InitialScreen";
import LoginScreen from "../screens/LoginScreen";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();



const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="initial"
    >
      <Stack.Screen name="initial" component={InitialScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
