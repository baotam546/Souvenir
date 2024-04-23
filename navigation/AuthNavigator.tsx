import React, { useContext } from "react";
import InitialScreen from "../screens/InitialScreen";
import LoginScreen from "../screens/AuthScreen/LoginScreen";
import { createStackNavigator } from "@react-navigation/stack";
import RegisterScreen from "../screens/AuthScreen/RegisterScreen";
import { AuthContext } from "../context/AuthContext";
const Stack = createStackNavigator();



const AuthNavigator = () => {
const authContext = useContext(AuthContext);
  let isInvalid = authContext?.isInvalid;
  let resRegister = authContext?.resRegister;


  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={isInvalid ? 'Login' : resRegister ? 'Register' : 'initial'}
      
    >
      <Stack.Screen name="initial" component={InitialScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
