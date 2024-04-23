import {
  View,
  Text,
  Alert,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import Modal from "react-native-modal";
import AddressChooseCard from "./AddressChooseCard";

interface AddressModalProps {
  visible: boolean;
  setModalVisible: (visible: boolean) => void;
}

const dataPhoneAddress = [
  {
    id: 1,
    address: "216 St Paul's Rd, London N1 2LL, Uk",
    phone: "090287732",
  },
  {
    id: 2,
    address: "2188 St Paul's Rd, London N2 2KK, UK",
    phone: "090287732",
  },
  {
    id: 3,
    address: "2188 St Paul's Rd, London N2 2KK, UK",
    phone: "090287732",
  },
];

const AddressModal: React.FC<AddressModalProps> = ({
  visible,
  setModalVisible,
}) => {
  return (
    <Modal
      animationOutTiming={400}
      backdropTransitionOutTiming={700}
      isVisible={visible}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>
            Choose your address
          </Text>

          <View style={{ width: "100%", flex: 1 }}>
            <FlatList
              data={dataPhoneAddress}
              renderItem={({ item }) => (
                <AddressChooseCard
                  key={item.id}
                  address={item.address}
                  phone={item.phone}
                  onAddressSelected={(address) => {
                    console.log(address);
                    setModalVisible(!visible);
                  }}
                />
              )}
            />
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
    backgroundColor: "#BEDB39",
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
