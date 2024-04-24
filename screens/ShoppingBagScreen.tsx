import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import ProductCardCheckOut from "../components/ProductCardCheckOut";
import AddressModal from "../components/AddressModal";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { addAddress } from "../redux/slices/AddressSlice";

const productImg = require("../assets/teddy.jpg");
type addressItem = {
  address: string;
  phone: string;
};
const ShoppingBagScreen = () => {
  const { navigate } = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const items = useSelector((state: any) => state.cart.data);
  const [cartItem, setCartItem] = useState(items);
  const [selectedCards, setSelectedCards] = useState<number[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const address = useSelector((state: any) => state.address.data);
  const [showAddressNotification, setShowAddressNotification] = useState(false);
  const [addressItem, setAddressItem] = useState<addressItem>();
  const dispatch= useDispatch();
  const proceedToPayment = () => {
    if (address.length >= 1) {
      navigate("paycheck-screen");
    } else {
      setShowAddressNotification(true);
    }
  };
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
    getSelectedAddress();
  }, []);
  const getSelectedAddress = async () => {
    const address = await AsyncStorage.getItem("address");
    if(address && addressItem == null){
      setAddressItem( JSON.parse(address) );
    }
  }

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => setModalVisible(!modalVisible)}
          style={{
            flex: 1,
            justifyContent: "center",
            paddingHorizontal: 10,
            rowGap: 10,
            marginBottom: 10,
            position: "relative",
            borderBottomWidth: 1,
            borderStyle: "dashed",
            backgroundColor: Colors.greyBackGround,
          }}
        >
          {addressItem ? (
            <>
              <View style={{ flexDirection: "row", columnGap: 10 }}>
                <Ionicons name="location-outline" size={20} />
                <Text style={{ fontWeight: "bold" }}>
                  {addressItem.address}
                </Text>
              </View>

              <View style={{ flexDirection: "row", columnGap: 10 }}>
                <Ionicons name="call-outline" size={20} />
                <Text style={{ fontWeight: "bold" }}>{addressItem.phone}</Text>
              </View>
            </>
          ) : (
            <View >
              <Text style={styles.title}>Choose Address</Text>
            </View>
          )}

          <Ionicons
            name="chevron-forward"
            size={20}
            style={{ position: "absolute", right: 10 }}
          />
        </TouchableOpacity>

        <View style={{ flex: 5 }}>
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
            style={{
              flexDirection: "row",
              alignItems: "center",
              columnGap: 20,
            }}
          >
            <View style={{ width: "30%" }}>
              <Text> Total:</Text>
              <Text style={{ fontWeight: "600", fontSize: 18 }}>
                $ {totalPrice.toFixed(2)}
              </Text>
            </View>
            <TouchableOpacity
              style={styles.processBtn}
              onPress={() => {
                proceedToPayment();
              }}
            >
              <Text style={{ fontWeight: "600", fontSize: 15, color: "white" }}>
                Proceed to Payment
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <AddressModal
        visible={modalVisible}
        setModalVisible={() => setModalVisible(!modalVisible)}
        setAddressItem={setAddressItem}
      ></AddressModal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
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
