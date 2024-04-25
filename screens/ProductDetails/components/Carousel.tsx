import { Dimensions, StyleSheet, Text, View, Image } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import React from 'react';

const width = Dimensions.get('window').width;

interface imageProps {
  image: string[];
}

const DetailsCarousel: React.FC<imageProps> = ({ image }) => {
  return (
    <View style={{ flex: 1 }}>
      <Carousel
        width={width}
        height={width / 1.5}
        data={image}
        scrollAnimationDuration={1000}
        onSnapToItem={(index) => console.log('current index:', index)}
        renderItem={({ index }) => (
          <View>
            <Image source={{ uri: image[index] }} style={{ width: '100%', height: '100%' }} />
          </View>
        )}
      />
    </View>
  );
};

export default DetailsCarousel;

const styles = StyleSheet.create({});
