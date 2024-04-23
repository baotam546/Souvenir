import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacityBase,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useEffect } from "react";
import { FlatList } from "react-native";
import CategoryCircleCard from "../components/CategoryCircleCard";
import MainCarousel from "../components/MainCarousel";
import Colors from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import ProductCard from "../components/ProductCard";
import { useNavigation } from "@react-navigation/native";
import { productApi } from "../utils/api/product";
import useAxiosPrivate from "../hooks/axiosPrivate";

const productImg = require("../assets/teddy.jpg");

const Category = [
  { id: 1, name: "Teddy" },
  { id: 2, name: "Car" },
];

const Product = [
  { id: 1, name: "Teddy" },
  { id: 2, name: "Car" },
  { id: 3, name: "Book" },
];

const HomeScreen = () => {
  const axios = useAxiosPrivate();
  const navigation = useNavigation();
  const [productList, setProductList] = React.useState([]);
  // const fetchData = async () => {
  //   try {
  //     const res = await productApi.getAllProductList();
  //     console.log("res", res.data.data);
  //     if(res.status == 200){
  //       setProductList(res.data.data.data)
  //       console.log("productList", productList);
  //     }
  //   } catch (error) {

  //   }
  // }
  const fetchData = async () => {
    try {
      const res = await axios.get(`product/?page=1&limit=999`);
      if (res.status === 200) {
        setProductList(res.data.data.data);
        //       console.log("productList", productList);
      }
    } catch (error) {}
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <ScrollView style={styles.scrollViewContainer}>
      <View style={{ flex: 1, paddingHorizontal: 10 }}>
        <Text style={styles.mainTitle}>All Feature</Text>
      </View>

      <View style={{ flex: 1 }}>
        <FlatList
          horizontal
          data={Category}
          renderItem={({ item }) => (
            <View style={styles.flatListWrapper}>
              <CategoryCircleCard name={item.name} />
            </View>
          )}
        />
      </View>

      <View style={styles.container}>
        <MainCarousel />
      </View>

      <View
        style={{
          flex: 1,
          marginVertical: 30,
          backgroundColor: Colors.lightBlue,
          padding: 10,
          borderRadius: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View>
            <Text style={{ fontSize: 18, color: "white" }}>
              Deal of the Day
            </Text>
            <View style={{ flexDirection: "row", columnGap: 5, marginTop: 6 }}>
              <Ionicons name="alarm-outline" size={20} color="white" />
              <Text style={{ fontSize: 12, color: "white" }}>
                22h 55m 20s remaining
              </Text>
            </View>
          </View>

          <View>
            <TouchableOpacity
              style={{
                borderColor: "white",
                borderWidth: 1,
                padding: 10,
                flexDirection: "row",
                alignItems: "center",
                columnGap: 10,
                borderRadius: 10,
              }}
              onPress={() => {
                navigation.navigate("productList-screen");
              }}
            >
              <Text style={{ fontSize: 16, color: "white" }}>View all</Text>
              <Ionicons name="arrow-forward" size={16} color={"white"} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {productList.length > 0 && (
        <View
          style={{
            flex: 1,
            height: "auto",
            paddingVertical: 10,
            marginVertical: 10,
          }}
        >
          <FlatList
            horizontal
            data={productList}
            renderItem={({ item }) => <ProductCard item={item} />}
            keyExtractor={(item: any) => item.id}
            contentContainerStyle={{
              justifyContent: "center",
              alignItems: "center",
            }}
          />
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  scrollViewContainer: {
    padding: 10,
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: "400",
  },
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

export default HomeScreen;
