import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Avatar } from "@rneui/base";
import { TouchableOpacity } from "react-native";
const categoryImg = require("../assets/teddy.jpg");
interface CategoryCircleCardProps {
  name: string;

}
const CategoryCircleCard: React.FC<CategoryCircleCardProps> = ({ name }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Avatar size={60} rounded source={categoryImg} />
      <Text style={styles.categoryText}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    rowGap: 10,
  },

  categoryText: {
    fontSize: 14,
    fontWeight: "500",
  },
});

export default CategoryCircleCard;
