import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Colors from "../constants/Colors";
import { Fontisto, Ionicons } from "@expo/vector-icons";

const PaycheckScreen = () => {
  const [isSelected, setIsSelected] = useState(false);
  console.log(isSelected);

  return (
    <View style={styles.container}>
      <View style={{ rowGap: 10 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.greyText}>Order</Text>
          <Text style={styles.greyText}>$7,00.00</Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.greyText}>Shipping</Text>
          <Text style={styles.greyText}>Free</Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.boldText}>Order</Text>
          <Text style={styles.boldText}>$7,00.00</Text>
        </View>
      </View>

      <View style={styles.divider}></View>

      <View>
        <Text style={{ fontSize: 20, fontWeight: "500" }}>Payment</Text>

        <View style={{ marginTop: 20, rowGap: 20 }}>
          <TouchableOpacity
            onPress={() => setIsSelected(!isSelected)}
            style={{
              borderRadius: 5,
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingVertical: 15,
              paddingHorizontal: 30,
              borderWidth: isSelected ? 2 : 1,
              borderColor: isSelected ? "#D50000" : "#CACACA",
              backgroundColor: Colors.greyBackGround,
            }}
          >
            <Fontisto name="visa" size={24} />
            <Text>********2104</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              borderRadius: 5,
              alignItems: "center",
              justifyContent: "center",
              paddingVertical: 15,
              paddingHorizontal: 30,
              backgroundColor: "#F83758",
              marginTop: 30,
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "600", color: "white" }}>
              Continue
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 40,
    backgroundColor: "white",
    flex: 1,
  },

  greyText: {
    fontSize: 16,
    color: Colors.grey,
  },

  boldText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  divider: {
    height: 1,
    backgroundColor: "grey",
    marginVertical: 40,
  },
});
export default PaycheckScreen;
