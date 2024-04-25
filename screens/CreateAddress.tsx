import {
  StyleSheet,
  Text,
  TextBase,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native";
import { useDispatch } from "react-redux";
import { addAddress } from "../redux/slices/AddressSlice";
import { useNavigation } from "@react-navigation/native";

const CreateAddress = () => {
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={{ display: "flex", gap: 3 }}>
        <Text style={styles.title}>Address: </Text>
        <TextInput
          style={[styles.input, { height: 100, textAlignVertical: "top" }]}
          multiline={true}
          numberOfLines={4}
          value={address}
          onChangeText={(text) => setAddress(text)}
        />
      </View>
      <View style={{ display: "flex", gap: 3 }}>
        <Text style={styles.title}>Phone: </Text>
        <TextInput
          keyboardType="phone-pad"
          value={phone}
          onChangeText={(text) => setPhone(text)}
          style={[styles.input]}
          multiline={true}
          numberOfLines={4}
        />
      </View>
      <View style={{ alignItems: "center", marginTop: 30 }}>
        <TouchableOpacity
          onPress={() => {
            dispatch(addAddress({ address: address, phone: phone }));
            navigation.goBack();
          }}
          style={styles.buttonConfirm}
        >
          <Text style={styles.buttonText}>Add address</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CreateAddress;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 20,
  },
  input: {
    width: "90%",
    height: 50,
    borderRadius: 10,
    borderWidth: 0.3,
    borderColor: "black",
    alignSelf: "center",
    padding: 10,
  },
  buttonConfirm: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    backgroundColor: "#34e920",
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
  },
});
