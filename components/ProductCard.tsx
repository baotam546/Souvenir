import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  StyleSheet,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const productImg = require("../assets/teddy.jpg");

interface ProductCardProps {
  item: {
    id: string;
    name: string;
    price: number;
    quantity: number;
    productImage: string;
  };

}
const ProductCard: React.FC<ProductCardProps> = ({item}) => {
  console.log("item", item);
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={{
        height: "auto",
        width: 170,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 9,
      }}
      onPress={()=>{
        navigation.navigate('productDetails-screen', item);
      }}
    >
      <View
        style={{
          height: "auto",
          width: 170,
          justifyContent: "center",
          marginRight: 10,
        }}
      >
        {/* product img */}
        <View style={{ height: 175, width: 170 }}>
          <Image
            source={{ uri: item.productImage[0] }}
            resizeMode="cover"
            style={{
              width: "100%",
              height: "100%",
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}
          />
        </View>

        {/* product text */}
        <View
          style={{
            height: "auto",
            width: "auto",
            backgroundColor: "white",
            padding: 10,
            rowGap: 5,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
          }}
        >
          <Text style={styles.productName}>{item.name}</Text>
          <Text style={styles.shortDes}>Lorem ipsum dolor</Text>
          <Text style={styles.price}>${item.price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  flatListWrapper: {
    padding: 10,
  },

  productName: {
    fontSize: 18,
    fontWeight: "600",
  },

  shortDes: {
    fontSize: 16,
    fontWeight: "400",
  },

  price: {
    fontSize: 16,
    fontWeight: "500",
  },
});
export default ProductCard;
