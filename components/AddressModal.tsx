import {
  View,
  Text,
  Alert,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import Modal from "react-native-modal";
import AddressChooseCard from "./AddressChooseCard";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { addAddress } from "../redux/slices/AddressSlice";

interface AddressModalProps {
  visible: boolean;
  setModalVisible: (visible: boolean) => void;
  setAddressItem: (item: addressItem) => void;
}
type addressItem = {
  address: string;
  phone: string;
};

const AddressModal: React.FC<AddressModalProps> = ({
  visible,
  setModalVisible,
  setAddressItem,
}) => {
  const navigate = useNavigation();
  const addressList = useSelector((state: any) => state.address);
  const [address, setAddress] = useState(addressList.data);
  const isFocus = useIsFocused();
  const dispatch = useDispatch();
  useEffect(() => {
    setAddress(addressList.data);
  }, [isFocus]);

  useEffect(() => {
    getSelectedAddress();
  }, []);
  const defaultAddress = async (item: any) => {
    await AsyncStorage.setItem(
      "address",
      JSON.stringify({
        address: item.address,
        phone: item.phone,
      })
    );
    setAddressItem(item);
  };
  const getSelectedAddress = async () => {
    const address = await AsyncStorage.getItem("address");
    if (addressList  && address) {
      dispatch(addAddress(JSON.parse(address)));
    } else return null;
  };

  return (
    <Modal
      animationOutTiming={400}
      backdropTransitionOutTiming={700}
      isVisible={visible}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={{ fontSize: 26, fontWeight: "bold" }}>
            Choose your address
          </Text>
          {address.length === 0 ? (
            <Text style={{ fontSize: 12, fontWeight: "500" }}>
              No address found
            </Text>
          ) : (
            <View style={{ width: "100%", flex: 1 }}>
              <FlatList
                data={address}
                renderItem={({ item }) => (
                  <AddressChooseCard
                    key={item.id}
                    address={item.address}
                    phone={item.phone}
                    onAddressSelected={(address) => {
                      console.log(address);
                      setModalVisible(!visible);
                    }}
                    onPress={() => defaultAddress(item)}
                  />
                )}
              />
            </View>
          )}

          <View style={{ width: "100%", rowGap: 5, marginTop: 30 }}>
            <TouchableOpacity
              onPress={() => navigate.navigate("Create Address")}
              style={styles.buttonConfirm}
            >
              <Text style={styles.buttonText}>Add address</Text>
            </TouchableOpacity>
          </View>
          <View style={{ width: "100%", rowGap: 5, marginTop: 30 }}>
            <TouchableOpacity
              onPress={() => setModalVisible(!visible)}
              style={styles.buttonCancel}
            >
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalView: {
    height: 450,
    width: "100%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 25,
    alignItems: "center",
    rowGap: 10,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
  },
  buttonConfirm: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#34e920",
    paddingVertical: 10,
    borderRadius: 5,
  },

  buttonCancel: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#D50000",
    paddingVertical: 10,
    borderRadius: 5,
  },
});

export default AddressModal;
