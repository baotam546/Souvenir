import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";
import { productApi } from "../../utils/api/product";

const ProductListScreen = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await productApi.getAllProductList();
        setProductList(response.data.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);
  return (
    <View style={styles.container}>
      <View></View>
      <View style={styles.firstSectionContainer}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: "#000",
          }}
        >
          52,082+ Items
        </Text>
      </View>
      <View style={{ flex: 1 }}>
        <FlatList
          style={{ flex: 1 }}
          numColumns={2}
          data={productList}
          renderItem={({ item }) => <ProductCard item={item} />}
          columnWrapperStyle={{ justifyContent: "space-between" }}
          contentContainerStyle={{
            justifyContent: "center",
          }}
        />
      </View>
    </View>
  );
};

export default ProductListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  firstSectionContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
});
