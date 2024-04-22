import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const imageCard = require("../assets/teddy.jpg");

const ProductCardCheckOut = () => {
  const { navigate } = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigate("shopping-screen");
      }}
      style={styles.cardContainer}
    >
      <View style={styles.cardTop}>
        <View style={{ width: 150, height: 150 }}>
          <Image source={imageCard} style={styles.img} />
        </View>

        <View style={styles.info}>
          <Text style={styles.productName}>Teddy</Text>
          <Text style={styles.variation}>Variation: </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text>4.8 </Text>
            <Ionicons name="star" color={"orange"} />
          </View>
          <View style={styles.priceBox}>
            <Text style={{ fontSize: 24, fontWeight: "bold" }}>$ 34.00</Text>
          </View>
        </View>
      </View>

      <View
        style={{ height: 1, backgroundColor: "black", marginVertical: 20 }}
      ></View>

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ fontWeight: "bold" }}>Total Order (1): </Text>
        <Text style={{ fontWeight: "bold" }}>$ 34.00</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: "100%",
    height: "auto",
    borderWidth: 1,
    borderColor: "#CACACA",
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  cardTop: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 10,
  },
  img: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 10,
  },
  info: { rowGap: 10 },
  productName: {
    fontSize: 20,
    fontWeight: "bold",
  },

  variation: {
    fontSize: 16,
    fontWeight: "bold",
  },

  priceBox: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "#CACACA",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ProductCardCheckOut;
