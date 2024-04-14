import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";

const SearchBar = () => {
  return (
    <View style={styles.searchBar}>
      <Ionicons name="search" size={20} color={Colors.grey} />
      <TextInput
        style={styles.searchInput}
        placeholder="Search any product..."
        placeholderTextColor={Colors.grey}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    height: 50,
    borderRadius: 8,
    paddingHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
  },
});

export default SearchBar;
