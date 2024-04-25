import { FlatList, StyleSheet, Text, TouchableHighlight, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { profileApi } from "../../utils/api/profile";
import { AuthContext } from "../../context/AuthContext";
import { useNavigation } from "@react-navigation/native";
import OrderRecord from "../../components/OrderRecord";

const ProductListScreen = () => {
  const [orderHistory, setOrderHistory] = useState([]);
  const navigation = useNavigation();
  const authContext = useContext(AuthContext);
  const logout = authContext?.logout;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await profileApi.getAllOrder();
        setOrderHistory(response.data.data);
        // console.log("orderHistory", response.data.data);
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
            fontSize: 30,
            fontWeight: "bold",
            color: "#000",
          }}
        >
            Order History
        </Text>
      <TouchableHighlight
            style={{backgroundColor: 'red', padding: 10, borderRadius: 30, justifyContent: 'center', alignItems: 'center'}}
            onPress={()=>{logout && logout()}} >
          <Text 
            style={{
                fontSize: 20,
                fontWeight: "bold",
                color: "#fff",
                
            }}>
            Logout
          </Text>
        </TouchableHighlight> 
      </View>
      <View style={{ flex: 1 }}>
        <FlatList
          style={{ flex: 1 }}
          numColumns={2}
          data={orderHistory}
          renderItem={({ item }) => <OrderRecord item={item} />}
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
