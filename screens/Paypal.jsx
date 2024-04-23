import { View, Text } from "react-native";
import React from "react";

const Paypal = () => {
  return (
    <WebView
      source={{ uri: "https://infinite.red" }}
      style={{ marginTop: 20 }}
    />
  );
};

export default Paypal;
