import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ProductCard from "../../components/ProductCard";

const ProductListScreen = () => {
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
      <View>
        {/* <ProductCard />
        <ProductCard /> */}
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
    marginBottom:10
  },
  
});
