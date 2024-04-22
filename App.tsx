import React, { useContext, useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AuthProvider } from "./context/AuthContext";
import AppNav from "./navigation/AppNav";


export default function App() {
 
  return (
    <AuthProvider>
      <SafeAreaProvider>
        <AppNav/>
      </SafeAreaProvider>
    </AuthProvider>
  );
}
