import React, { useContext, useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AuthProvider } from "./context/AuthContext";
import AppNav from "./navigation/AppNav";
import { Provider } from "react-redux";
import {store} from './redux/store/store'

export default function App() {
 
  return (
    <AuthProvider>
      <Provider store={store}>
        <SafeAreaProvider>
        <AppNav/>
      </SafeAreaProvider>
      </Provider>
      
    </AuthProvider>
  );
}
