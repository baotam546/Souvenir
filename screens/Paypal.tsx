import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import WebView from "react-native-webview";
import { SafeAreaView } from "react-native-safe-area-context";
import { paymentApi } from "../utils/api/payment";

interface PayPalWebViewProps {
  navigation: NavigationProp<ParamListBase>;
  route: any; // PayPal URL passed as a prop
}

const Paypal: React.FC<PayPalWebViewProps> = ({ navigation, route }) => {
  const { paypalUrl } = route.params;
  const [currentUrl, setCurrentUrl] = useState<string>(paypalUrl);

  useEffect(() => {
    // const updatedUrl = paypalUrl;
    // console.log("paypal");

    // if (!updatedUrl) {
    //   navigation.navigate("paycheck-screen");
    // }
    setCurrentUrl(paypalUrl);
  }, [paypalUrl]);

  const handleNavigationStateChange = async (event: any) => {
    if (event.url.includes("success")) {
      console.log(event.url);

      const parts = event.url.split("localhost:3000");
      console.log("Paypal parts", parts);
      const result = await paymentApi.getPayment(parts[1]);
      console.log("result", result);

      if (result.data.status === 200) {
        navigation.navigate("successScreen");
      }
    } else if (event.url.includes("cancel")) {
      console.log("Failure");
      navigation.navigate("paycheck-screen");
    }
  };

  return (
    <WebView
      source={{ uri: currentUrl }}
      onNavigationStateChange={handleNavigationStateChange}
      style={{ flex: 1 }}
    />
  );
};

export default Paypal;
