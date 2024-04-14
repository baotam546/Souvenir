import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import Header from "./components/Header";
import { createDrawerNavigator } from "@react-navigation/drawer";
import About from "./screens/About";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen
            options={{
              header: () => <Header />,
            }}
            name="Home"
            component={HomeScreen}
          />
          <Drawer.Screen
            options={{
              header: () => <Header />,
            }}
            name="About"
            component={About}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
