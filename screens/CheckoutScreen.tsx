import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import ProductCardCheckOut from "../components/ProductCardCheckOut";
import { useNavigation } from "@react-navigation/native";

const data = [1, 2, 3, 4, 5, 6, 7];

const CheckoutScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Ionicons name="location-outline" size={20} />
        <Text style={styles.titleText}>Delivery Address</Text>
      </View>

      <View style={styles.addressContainer}>
        <View style={styles.addressLeft}>
          <Text style={styles.addressTitle}>Address: </Text>
          <Text>216 St Paul's Rd, London N1 2LL, Uk </Text>
          <Text>
            <Text style={{ fontWeight: "bold" }}>Contact:</Text> +46 123455
          </Text>
        </View>

        <View style={styles.addressRight}>
          <Ionicons name="add-circle-outline" size={40}></Ionicons>
        </View>
      </View>

      <View style={styles.shoppingListContainer}>
        <Text style={styles.shoppingText}>Shopping List</Text>
        <View style={{ flex: 1 }}>
          <FlatList
            data={data}
            renderItem={(item) => <ProductCardCheckOut />}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },

  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 5,
    marginBottom: 10,
  },
  titleText: {
    fontSize: 16,
    fontWeight: "600",
  },

  shoppingText: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 20,
  },

  addressContainer: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 10,
    width: "100%",
    marginBottom: 30,
  },

  addressLeft: {
    width: "70%",
    height: 100,
    padding: 10,
    shadowColor: "#000",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#CACACA",
  },

  addressTitle: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 5,
  },
  addressRight: {
    width: "30%",
    height: 100,
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#CACACA",
  },

  shoppingListContainer: {
    flex: 1,
  },
});

export default CheckoutScreen;
