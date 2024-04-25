import React, { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  Image,
  Animated,
  TouchableOpacity,
} from "react-native";
import { ExpandingDot } from "react-native-animated-pagination-dots";
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Login: undefined;
  Details: { itemId: number };
};

type InitialScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

type Props = {
  navigation: InitialScreenNavigationProp;
};

interface Slide {
  id: number;
  title: string;
  img: number;
  paragraph: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Choose Products",
    img: require("../assets/slider-1.png"),
    paragraph:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
  },
  {
    id: 2,
    title: "Make Payment",
    img: require("../assets/slider-2.png"),
    paragraph:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
  },
  {
    id: 3,
    title: "Get Your Order",
    img: require("../assets/slider-3.png"),
    paragraph:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
  },
];

const { height, width } = Dimensions.get("window");

const InitialScreen = ({ navigation }: Props) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [currentSlide, setCurrentSlide] = useState(0);

  const onScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
    {
      useNativeDriver: false,
      listener: (event: any) => {
        const newIndex = Math.round(event.nativeEvent.contentOffset.x / width);
        if (newIndex !== currentSlide) {
          setCurrentSlide(newIndex);
        }
      },
    }
  );

  const renderSlide = ({ item }: { item: Slide }) => (
    <View style={styles.slide}>
      <Image source={item.img} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.paragraph}>{item.paragraph}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.pageContainer}>
      <Text style={styles.counter}>
        {currentSlide + 1} / {slides.length}
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.skipButton}>Skip</Text>
        </TouchableOpacity>
      </View>
      

      <FlatList
        data={slides}
        renderItem={renderSlide}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        scrollEventThrottle={32}
      />
      <ExpandingDot
        data={slides}
        expandingDotWidth={30}
        scrollX={scrollX}
        containerStyle={styles.dotContainer}
        dotStyle={styles.dot}
        inActiveDotOpacity={0.2}
        inActiveDotColor="#17223B"
        activeDotColor="#17223B"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slide: {
    width,
    height,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    padding: 20,
    paddingTop: 0,
    // marginTop: 0,
  },
  title: {
    fontSize: 26,
    textAlign: "center",
    fontWeight: "bold",
  },
  paragraph: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 10,
    opacity: 0.6,
  },
  image: {
    marginTop: 0,
    paddingTop: 0,
    width: width * 0.9,
    height: "30%",
    resizeMode: "cover",
  },
  dotContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 3,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    position: "absolute",
    bottom: 20,
    width: "100%",
  },
  counter: {
    
    fontSize: 20,
  },
  skipButton: {
    
    fontSize: 20,
  },
  pageContainer: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 40,
    marginHorizontal: 20,
  },
});

export default InitialScreen;
