import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const imageCard = require("../assets/teddy.jpg");

interface ProductCardCheckOutProps {
  isSelect: boolean;
  onPress: () => void;
}

const ProductCardCheckOut: React.FC<ProductCardCheckOutProps> = ({
  isSelect,
  onPress,
}) => {
  const { navigate } = useNavigation();
  const [quantity, setQuantity] = useState(1);

  const handleIncreaseQuantity = () => {
    return setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <View style={styles.cardContainer}>
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
            <TouchableOpacity
              onPress={handleDecreaseQuantity}
              style={{ width: 30, alignItems: "center" }}
            >
              <AntDesign name="minus" size={16} />
            </TouchableOpacity>
            <TextInput
              value={quantity.toString()}
              keyboardType={"numeric"}
              style={{
                borderWidth: 1,
                textAlign: "center",
                width: 50,
                height: 40,
              }}
            />
            <TouchableOpacity
              onPress={handleIncreaseQuantity}
              style={{ width: 30, alignItems: "center" }}
            >
              <AntDesign name="plus" size={16} />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={{ marginTop: 5, marginLeft: 10 }}>
          <Ionicons name="trash-bin-outline" size={24} color="red" />
        </TouchableOpacity>
      </View>

      <View
        style={{ height: 1, backgroundColor: "black", marginVertical: 20 }}
      ></View>

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ fontWeight: "bold" }}>Total Order ({quantity}): </Text>
        <Text style={{ fontWeight: "bold" }}>$ {34.0 * quantity}</Text>
      </View>
    </View>
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
    alignItems: "flex-start",
    columnGap: 10,
  },
  img: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 10,
  },
  info: { rowGap: 10, marginTop: 5 },
  productName: {
    fontSize: 20,
    fontWeight: "bold",
  },

  variation: {
    fontSize: 16,
    fontWeight: "bold",
  },

  priceBox: {
    width: "auto",
    borderWidth: 1,
    borderColor: "#CACACA",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    columnGap: 10,
  },
});

export default ProductCardCheckOut;
