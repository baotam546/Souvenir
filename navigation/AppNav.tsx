import { View, Text, ActivityIndicator } from "react-native";
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./TabNavigator";
import AuthNavigator from "./AuthNavigator";

const AppNav = () => {
  const authContext = useContext(AuthContext);
  const isLoading = authContext?.isLoading;
  const userToken = authContext?.userToken;
  // if (isLoading) {
  //   return (
  //       <View style={{flex:1,justifyContent:'center', alignItems:'center'}}>
  //           <ActivityIndicator size="large"/>
  //       </View>
  //   );
  // }
  return (
    <NavigationContainer>
      {/* {userToken ? <TabNavigator /> : <AuthNavigator />} */}
      <TabNavigator />
    </NavigationContainer>
  );
};

export default AppNav;
