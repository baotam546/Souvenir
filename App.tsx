import React from "react";
import { createTheme, ThemeProvider } from "@rneui/themed";
import Component from "./components/MyComponent";
import { NavigationContainer } from "@react-navigation/native";

const theme = createTheme({
  lightColors: {},
  darkColors: {},
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Component />
      </NavigationContainer>
    </ThemeProvider>
  );
}
