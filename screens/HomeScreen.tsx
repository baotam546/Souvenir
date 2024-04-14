import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import { FlatList } from "react-native-gesture-handler";
import CategoryCircleCard from "../components/CategoryCircleCard";

const Category = [
  { id: 1, name: "Teddy" },
  { id: 2, name: "Car" },
];

const HomeScreen = () => {
  return (
    <ScrollView style={styles.scrollViewContainer}>
      <View style={{ flex: 1 }}>
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    padding: 20,
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: "400",
  },
  flatListWrapper: {
    padding: 10,
  },
});

export default HomeScreen;
