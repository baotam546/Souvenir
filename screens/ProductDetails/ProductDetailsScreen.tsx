import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import MainCarousel from "../../components/MainCarousel";
import DetailsCarousel from "./components/Carousel";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { StarRatingDisplay } from "react-native-star-rating-widget";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemstoCart,
  reduceItemFromCart,
  removeItemFromCart,
} from "../../redux/slices/CartSlice";
import { useRoute } from "@react-navigation/native";
import useAxiosPrivate from "../../hooks/axiosPrivate";
import { AuthContext } from "../../context/AuthContext";

type Product = {
  _id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  productImage: string[];
  quantity: number;
  brand: string;
  createdAt: string;
  updatedAt: string;
};
const width = Dimensions.get("window").width;
const ProductDetailsScreen = () => {
  const route = useRoute();
  const axios = useAxiosPrivate();
  const [product, setProduct] = React.useState<Product>();
  const item: any = route.params;
  const [quantity, setQuantity] = useState(1);

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const fetchData = async () => {
    try {
      const res = await axios.get(`product/?id=${item._id}`);
      if (res.status === 200) {
        setProduct(res.data.data);
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const formatPriceInVND = (price: number) => {
    return new Intl.NumberFormat("us-US", {
      style: "currency",
      currency: "USD",
    }).format(price);
  };
  if (!product) {
    return (
      <View>
        <Text>Something went wrong</Text>
      </View>
    );
  }
  const dispatch = useDispatch();
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 7 }}>
        <View style={styles.container}>
          <DetailsCarousel image={product.productImage} />
        </View>
        <View style={{ flex: 1, backgroundColor: "white" }}>
          <View style={styles.detailsContainer}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={{ fontSize: 26, fontWeight: "700", color: "red" }}>
                {formatPriceInVND(product?.price || 0)}
              </Text>
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
            <Text style={{ fontSize: 24, fontWeight: "500" }}>
              {product?.name || ""}
            </Text>

            <View style={styles.starContainer}>
              <StarRatingDisplay starSize={20} rating={4.5} />
              <Text style={{ fontSize: 16, fontWeight: "500" }}>
                (255 reviews)
              </Text>
            </View>
            <View style={{ marginTop: 20 }}>
              <Text style={{ fontSize: 24, fontWeight: "500" }}>
                Description
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "400",
                  color: "#ababab",
                  marginBottom: 20,
                }}
              >
                {product?.description || ""}
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View
        style={{
          flex: 1,
          backgroundColor: "white",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          padding: 10,
          borderTopWidth: 1,
          borderColor: "#CACACA",
        }}
      >
        <View
          style={{ flexDirection: "row", columnGap: 20, paddingHorizontal: 30 }}
        >
          <TouchableOpacity
            style={styles.cartButton}
            onPress={() => {
              dispatch(
                addItemstoCart({
                  id: product._id,
                  name: product.name,
                  price: product.price,
                  quantity: quantity,
                  productImage: product.productImage[0],
                })
              );
            }}
          >
            <Ionicons name="cart" size={20} color="red" />
            <Text style={styles.buttonText}>Add to cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  detailsContainer: {
    padding: 20,
    display: "flex",
    flexDirection: "column",
    rowGap: 10,
  },
  starContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
  },
  nameContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 5,
    marginTop: 10,
  },
  cartButton: {
    paddingHorizontal: 10,
    columnGap: 10,
    height: 60,
    borderWidth: 1,
    borderColor: "red",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    width: "100%",
  },

  buttonText: {
    color: "red",
    fontSize: 16,
    fontWeight: "bold",
  },
  priceBox: {
    width: 150,
    borderWidth: 1,
    borderColor: "#CACACA",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    columnGap: 10,
  },
});
