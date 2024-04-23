import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import ProductCardCheckOut from "../components/ProductCardCheckOut";
import { useNavigation } from "@react-navigation/native";
import AddressModal from "../components/AddressModal";

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
  const [modalVisible, setModalVisible] = useState(false);
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

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Ionicons name="location-outline" size={20} />
        <Text style={styles.titleText}>Delivery Address</Text>
      </View>

      <View style={styles.addressContainer}>
        <TouchableOpacity
          onPress={() => setModalVisible(!modalVisible)}
          style={styles.addressLeft}
        >
          <Text style={styles.addressTitle}>Address: </Text>
          <Text>216 St Paul's Rd, London N1 2LL, Uk </Text>
          <Text>
            <Text style={{ fontWeight: "bold" }}>Contact:</Text> +46 123455
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigate("shopping-screen");
          }}
          style={styles.addressRight}
        >
          <MaterialIcons name="paid" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.shoppingListContainer}>
        <Text style={styles.shoppingText}>Shopping Cart List</Text>
        <View style={{ flex: 1 }}>
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <ProductCardCheckOut
                isSelect={selectedCards.includes(item.id)}
                onPress={() => handleCardPress(item.id)}
              />
            )}
          />
        </View>
      </View>

      <AddressModal
        visible={modalVisible}
        setModalVisible={() => setModalVisible(!modalVisible)}
      ></AddressModal>
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
    flex: 1,
    width: "100%",
  },
});

export default CheckoutScreen;
