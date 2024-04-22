import React from "react";
import InitialScreen from "../screens/InitialScreen";
import LoginScreen from "../screens/AuthScreen/LoginScreen";
import { createStackNavigator } from "@react-navigation/stack";
import RegisterScreen from "../screens/AuthScreen/RegisterScreen";
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
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
