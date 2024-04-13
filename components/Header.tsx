import { View, Platform, TouchableOpacity, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Avatar } from "@rneui/base";
import Search from "./SearchBar";
const logoImg = require("../assets/logo2.png");

const Header = () => {
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.container}>
        <TouchableOpacity>
          <Ionicons name="menu-outline" size={24} />
        </TouchableOpacity>
        <View>
          <Image source={logoImg} style={styles.logo} />
        </View>
        <TouchableOpacity>
          <Avatar
            size={32}
            rounded
            source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
          />
        </TouchableOpacity>
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
    backgroundColor: "white",
    paddingBottom: Platform.OS === "ios" ? -20 : 10,
    paddingHorizontal: 20,
  },
  container: {
    height: 70,
    marginTop: Platform.OS === "ios" ? -25 : -10,
    marginBottom: Platform.OS === "ios" ? -10 : -10,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  logo: {
    width: 100,
    height: 50,
    resizeMode: "cover",
  },
});

export default Header;
