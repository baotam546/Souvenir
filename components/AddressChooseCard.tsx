import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { ListItem } from "@rneui/base";

interface AddressChooseCardProp {
  address: string;
  phone: string;
  onAddressSelected: (address: string, phone: string) => void;
}

const AddressChooseCard: React.FC<AddressChooseCardProp> = ({
  onAddressSelected,
  address,
  phone,
}) => {
  const [isSelected, setIsSelected] = useState(false);

  const handlePress = () => {
    setIsSelected(!isSelected);
    onAddressSelected(address, phone);
  };

  return (
    <TouchableOpacity
      style={[
        styles.cardContainer,
        { borderColor: isSelected ? "black" : "#CACACA" },
      ]}
      onPress={handlePress}
    >
      <ListItem>
        <ListItem.Content style={{ rowGap: 10 }}>
          <View>
            <ListItem.Title style={{ fontWeight: "bold" }}>
              Address:
            </ListItem.Title>
            <ListItem.Subtitle>{address}</ListItem.Subtitle>
          </View>
          <View>
            <ListItem.Title style={{ fontWeight: "bold" }}>
              Phone:
            </ListItem.Title>
            <ListItem.Subtitle>{phone}</ListItem.Subtitle>
          </View>
        </ListItem.Content>
      </ListItem>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginVertical: 5,
    width: "100%",
    borderWidth: 1,
    borderColor: "#CACACA",
  },
});

export default AddressChooseCard;
