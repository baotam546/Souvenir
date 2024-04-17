import { View, Text, Dimensions, Image } from "react-native";
import React from "react";
import Carousel from "react-native-reanimated-carousel";
import { StyleSheet } from "react-native";

const banner1 = require("../assets/carousel-banner.jpg");
const banner2 = require("../assets/carousel-banner-2.jpg");
const banner3 = require("../assets/carousel-banner-3.jpg");

const dataBanner = [
  { id: 1, url: banner1 },
  { id: 2, url: banner2 },
  { id: 3, url: banner3 },
];

const MainCarousel = () => {
  const width = Dimensions.get("window").width;

  return (
    <Carousel
      pagingEnabled={true}
      snapEnabled={true}
      loop
      width={width}
      height={width / 2}
      autoPlay={true}
      data={dataBanner}
      scrollAnimationDuration={1500}
      renderItem={({ index }) => (
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            paddingHorizontal: 20,
          }}
        >
          <Image
            source={dataBanner[index].url}
            style={styles.bannerImg}
            resizeMode="cover"
          />
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  bannerImg: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 10,
  },
});

export default MainCarousel;
