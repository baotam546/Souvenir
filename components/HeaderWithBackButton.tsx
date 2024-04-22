import { View, Platform, TouchableOpacity, Image, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import { Avatar } from "@rneui/base";
import Search from "./SearchBar";
import Colors from "../constants/Colors";
const logoImg = require("../assets/logo2.png");
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import Cart from "./Cart";

interface Props{
    title: string
    
}
const HeaderWithBackButton: React.FC<Props>= ({
    title
}) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.container}>
        <View style={{display: "flex", flexDirection:"row", gap:5, alignItems:"center", justifyContent:"center"}}>
            <Ionicons name="arrow-back" size={24} onPress={() => navigation.goBack()} />
          <Text style={styles.logo}>{title}</Text>
        </View>
        <View
          style={{ alignItems: "center", flexDirection: "row", columnGap: 10 }}
        >
          <Cart/>
          <TouchableOpacity>
            <Avatar
              size={32}
              rounded
              source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Search />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 0,
    paddingTop: 10,
    backgroundColor: Colors.greyBackGround,
    paddingBottom: Platform.OS === "ios" ? -20 : 10,
    paddingHorizontal: 20,
  },
  container: {
    height: 70,
    marginTop: Platform.OS === "ios" ? -25 : -10,
    marginBottom: Platform.OS === "ios" ? -10 : -10,
    backgroundColor: Colors.greyBackGround,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  logo: {
    fontWeight: "bold",
    fontSize: 25,
    letterSpacing: -1.5,
  },
});

export default HeaderWithBackButton;
