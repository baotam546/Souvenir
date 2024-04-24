import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  StyleSheet,
  Modal,
  TouchableHighlight,
} from "react-native";
import React, { useState } from "react";
// import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";


//   const productImg = require("../assets/teddy.jpg");

interface Items {
    productId: Product;
    quantity: number;
    _id: string;
  }
  interface Product {
    _id: string;
    name: string;
    price: number;
  }

interface OrderRecordProps {
  item: {
    orderID: string;
    status: string;
    items:Items[];
  };
}
const OrderRecord: React.FC<OrderRecordProps> = ({ item }) => {
//   const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableOpacity
        style={{
          marginBottom: 10,
          marginHorizontal: 5,
          height: "auto",
          width: "100%",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.32,
          shadowRadius: 5.46,

          elevation: 9,
        }}
        onPress={() => setModalVisible(true)}
      >
        <View
          style={{
            height: "auto",
            width: "100%",
            justifyContent: "center",
            marginRight: 10,
          }}
        >
          <View style={{ width: 170 }}></View>

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
            <Text style={styles.productName} numberOfLines={1}>
              Order ID:{item.orderID}
            </Text>
            {/* <Text style={styles.shortDes}>Lorem ipsum dolor</Text> */}
            <Text style={styles.shortDes}>
              <Text style={{ fontWeight: "bold" }}>Status:</Text> {item.status}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
    <View style={styles.modalView}>
    <View style={styles.tableRow}>
      <Text style={styles.tableCell}>No.</Text>
      <Text style={styles.tableCell}>Name</Text>
      <Text style={styles.tableCell}>Price</Text>
      <Text style={styles.tableCell}>Quantity</Text>
        <Text style={styles.tableCell}>Total</Text>
    </View>
    {item.items.map((arrayItem, index) => (
      <View key={index} style={styles.tableRow}>
        <Text style={styles.tableCell}>{index + 1}</Text>
        <Text style={styles.tableCell}>{arrayItem.productId.name}</Text>
        <Text style={styles.tableCell}>{arrayItem.productId.price}</Text>
        <Text style={styles.tableCell}>{arrayItem.quantity}</Text>
        <Text style={styles.tableCell}>{arrayItem.productId.price * arrayItem.quantity}</Text>
      </View>
    ))}
      <TouchableOpacity
        onPress={() => {
          setModalVisible(!modalVisible);
        }}
        style={styles.closeModalBtn}
      >
        <Ionicons name="close" size={24} color="black" />
      </TouchableOpacity>
    </View>
        </View>
      </Modal>
    </>
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
  centeredView: {
    flex: 1,
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
    // marginTop: 22
  },
  modalView: {
    position: "relative",
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 1000,
    //   height: 1000,
    // },
    // shadowOpacity: 1,
    // shadowRadius: 1000,
    elevation: 5,
    maxHeight: '80%',
    width: '90%', 
  },
  closeModalBtn: {
    // backgroundColor: "red",
    // padding: 10,
    borderRadius: 100,
    position: "absolute",
    top: 10,
    right: 10,
    width: 30,
    height: 30,
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    padding: 10,
  },
  tableCell: {
    flex: 1,
    
  },
});
export default OrderRecord;
