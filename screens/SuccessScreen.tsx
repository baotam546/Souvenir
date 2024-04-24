import { View, Text } from "react-native";
import React, { useEffect } from "react";

import { CommonActions, useNavigation } from "@react-navigation/native";

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
    <View>
      <Text>SuccessScreen</Text>
    </View>
  );
};

export default SuccessScreen;
