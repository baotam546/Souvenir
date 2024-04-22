import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import { useNavigation } from "@react-navigation/native";

const productImg = require("../assets/teddy.jpg");

const ShoppingBagScreen = () => {
  const { navigate } = useNavigation();

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            columnGap: 20,
            alignItems: "flex-start",
          }}
        >
          <View style={{ width: "35%", height: 170 }}>
            <Image
              source={productImg}
              style={{
                width: "100%",
                height: "100%",
                resizeMode: "cover",
                borderRadius: 5,
              }}
            />
          </View>
          <View style={{ width: "60%", marginTop: 20 }}>
            <View style={styles.info}>
              <Text style={styles.productName}>Women's Casual Wear</Text>
              <Text style={styles.variation}>
                Checked Single-Breasted Blazer
              </Text>

              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text>Delivery by: </Text>
                <Text style={{ fontSize: 17, fontWeight: "bold" }}>
                  10 May 2024
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.divider}></View>
        <View>
          <Text style={styles.title}>Order Payment Details</Text>

          <View style={{ rowGap: 10, marginTop: 30 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 18 }}>Order Amount</Text>
              <Text style={{ fontWeight: "600", fontSize: 15 }}>
                $7,000.000
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 18 }}>Delivery Fee</Text>
              <Text style={{ fontWeight: "600", fontSize: 15, color: "red" }}>
                Free
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.divider}></View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "600" }}>Order Total</Text>
          <Text style={{ fontWeight: "600", fontSize: 15 }}>$7,000.000</Text>
        </View>
      </View>

      <View
        style={{
          flex: 1,
          backgroundColor: Colors.greyBackGround,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,

          paddingHorizontal: 20,
          borderColor: "#CACACA",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{ flexDirection: "row", alignItems: "center", columnGap: 20 }}
        >
          <View style={{ width: "30%" }}>
            <Text> Total:</Text>
            <Text style={{ fontWeight: "600", fontSize: 18 }}>$ 7,000.000</Text>
          </View>
          <TouchableOpacity
            style={styles.processBtn}
            onPress={() => {
              navigate("paycheck-screen");
            }}
          >
            <Text style={{ fontWeight: "600", fontSize: 15, color: "white" }}>
              Proceed to Payment
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 5,
  },
  info: { rowGap: 10 },
  productName: {
    fontSize: 20,
    fontWeight: "500",
  },
  title: {
    fontSize: 20,
    fontWeight: "400",
  },
  variation: {
    fontSize: 16,
  },

  priceBox: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "#CACACA",
    alignItems: "center",
    justifyContent: "center",
  },
  divider: {
    height: 1,
    backgroundColor: "grey",
    marginVertical: 40,
  },
  processBtn: {
    width: "60%",
    backgroundColor: "#F83758",
    justifyContent: "center",
    borderRadius: 5,
    alignItems: "center",
    paddingVertical: 10,
  },
});

export default ShoppingBagScreen;
