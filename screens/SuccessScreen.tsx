import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";

import { CommonActions, useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
const successIcon = require("../assets/check.png");

const SuccessScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [
            {
              name: "home",
              state: {
                routes: [{ name: "home-screen" }],
              },
            },
          ],
        })
      );
    }, 2000); // 5000 milliseconds = 5 seconds

    return () => clearTimeout(timer); // This will clear the timer when the component unmounts
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View
          style={{
            width: 100,
            height: 100,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={successIcon}
            style={{ width: "100%", height: "100%", resizeMode: "cover" }}
          />
        </View>
        <Text
          style={{
            width: "100%",
            fontSize: 22,
            textAlign: "center",
            marginTop: 10,
            fontWeight: "bold",
          }}
        >
          Payment Successfully
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SuccessScreen;
