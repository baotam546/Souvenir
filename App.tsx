import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import TabNavigator from "./navigation/TabNavigator";
import AuthNavigator from "./navigation/AuthNavigator";

export default function App() {
  const [isAuth, setAuthentication] = useState(false);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {isAuth ? <TabNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </SafeAreaProvider>
  );
}