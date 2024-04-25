import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import Colors from "../constants/Colors";
import { Fontisto, Ionicons } from "@expo/vector-icons";
import { paymentApi } from "../utils/api/payment";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { TextPropTypes } from "react-native";

type Product = {
  id: string;
  name: string;
  price: string;
  quantity: number;
};

const PaycheckScreen = () => {
  const [isCodSelected, setIsCodSelected] = useState(false);
  const [isPaypalSelected, setIsPaypalSelected] = useState(false);
  const items = useSelector((state: any) => state.cart.data);
  const [cartItem, setCartItem] = useState<Product[]>(items);
  const navigation = useNavigation();
  const [loading, setLoading] = useState<boolean>(false);
  const [paypalUrl, setPaypalUrl] = useState<string>("");
  const [cartPayment, setCartPayment] = useState([]);

  useEffect(() => {
    // Transform items to fit the Product type and add any additional logic
    const transformedItems = items.map((item: Product) => ({
      productId: item.id,
      name: item.name,
      price: item.price.toString(),
      quantity: item.quantity,
    }));
    setCartPayment(transformedItems);
  }, [items]);

  const createPayment = async (arr: any) => {
    setLoading(true);

    try {
      const response = await paymentApi.createPayment(arr);
      if (response.data.status === 200) {
        setPaypalUrl(response.data.data);
        setLoading(false);
        // err1
        if (paypalUrl !== "") {
          navigation.navigate("paypal-webview", { paypalUrl: paypalUrl });
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  const createCodPayment = async (arr: any) => {
    try {
      navigation.navigate("successScreen");
    } catch (error) {
      console.error(error);
    }
  };

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
            onPress={() => {
              setIsCodSelected(true);
              setIsPaypalSelected(false);
            }}
            style={{
              borderRadius: 5,
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "center",
              paddingVertical: 15,
              paddingHorizontal: 30,
              borderWidth: isCodSelected ? 2 : 1,
              borderColor: isCodSelected ? "#D50000" : "#CACACA",
              backgroundColor: Colors.greyBackGround,
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>COD</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setIsPaypalSelected(true);
              setIsCodSelected(false);
            }}
            style={{
              borderRadius: 5,
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "center",
              paddingVertical: 15,
              paddingHorizontal: 30,
              borderWidth: isPaypalSelected ? 2 : 1,
              borderColor: isPaypalSelected ? "#D50000" : "#CACACA",
              backgroundColor: Colors.greyBackGround,
            }}
          >
            <Fontisto name="paypal-p" size={24} />
          </TouchableOpacity>

          <TouchableOpacity
            disabled={!isCodSelected && !isPaypalSelected}
            onPress={() => {
              if (isCodSelected) {
                createCodPayment(cartPayment);
              } else {
                createPayment(cartPayment);
              }
            }}
            style={{
              borderRadius: 5,
              alignItems: "center",
              justifyContent: "center",
              paddingVertical: 15,
              paddingHorizontal: 30,
              backgroundColor:
                isCodSelected || isPaypalSelected ? "#F83758" : "#CACACA",
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
