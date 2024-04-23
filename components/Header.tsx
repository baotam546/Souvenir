import { View, Platform, TouchableOpacity, Image } from "react-native";
import React, { useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import { Avatar } from "@rneui/base";
import Search from "./SearchBar";
import Colors from "../constants/Colors";
const logoImg = require("../assets/logo2.png");
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { AuthContext } from "../context/AuthContext";
import { useSelector } from "react-redux";
import Cart from "./Cart";

const Header = () => {
  const navigation = useNavigation();
  const authContext = useContext(AuthContext);
  const logout = authContext?.logout;

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.container}>
        <View>
          <Image source={logoImg} style={styles.logo} />
        </View>
        <View
          style={{ alignItems: "center", flexDirection: "row", columnGap: 10 }}
        >
          <Cart/>
          <TouchableOpacity onPress={()=>{logout && logout()}}>
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
    width: 100,
    height: 50,
    resizeMode: "cover",
  },
});

export default Header;
