import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import ProductCardCheckOut from "../components/ProductCardCheckOut";
import { useNavigation } from "@react-navigation/native";
import AddressModal from "../components/AddressModal";
import { useSelector } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../constants/Colors";

const data = [
  {
    id: 1,
    name: "Product 1",
  },

  {
    id: 2,
    name: "Product 1",
  },

  {
    id: 3,
    name: "Product 1",
  },

  {
    id: 4,
    name: "Product 1",
  },
];

const CheckoutScreen = () => {
  const items = useSelector((state: any) => state.cart.data);
  const [cartItem, setCartItem] = useState(items);
  const { navigate } = useNavigation();
  const [selectedCards, setSelectedCards] = useState<number[]>([]);

  const handleCardPress = (cardId: number) => {
    setSelectedCards((prevSelectedCards: any) => {
      if (prevSelectedCards.includes(cardId)) {
        return prevSelectedCards.filter((id: any) => id !== cardId);
      } else {
        return [...prevSelectedCards, cardId];
      }
    });
  };

  useEffect(() => {
    // Update cartItem state whenever cart data changes in the Redux store
    setCartItem(items);
  }, [items]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.shoppingListContainer}>
        <Text style={styles.shoppingText}>Shopping Cart</Text>
        <View style={{ flex: 1 }}>
          <FlatList
            data={cartItem}
            renderItem={({ item }) => (
              <ProductCardCheckOut
                item={item}
                isSelect={selectedCards.includes(item.id)}
                onPress={() => handleCardPress(item.id)}
              />
            )}
          />
        </View>
      </View>

      <View style={{ flex: 1, justifyContent: "center" }}>
        <TouchableOpacity
          onPress={() => {
            navigate("shopping-screen");
          }}
          style={{
            width: "100%",
            backgroundColor: "green",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 5,
          }}
        >
          <View
            style={{
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "center",
              columnGap: 5,
            }}
          >
            <Text style={{ fontSize: 16, color: "white" }}>Checking out</Text>
            <Ionicons name="arrow-forward" size={16} color={"white"} />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: "white",
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
    width: "80%",
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
    width: "20%",
    height: 100,
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#CACACA",
    padding: 10,
    backgroundColor: "green",
  },

  shoppingListContainer: {
    flex: 10,
    width: "100%",
  },
});

export default CheckoutScreen;
