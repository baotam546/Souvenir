import { Dimensions, StyleSheet, Text, View } from 'react-native'
import Carousel from 'react-native-reanimated-carousel';
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
const width = Dimensions.get('window').width;
const DetailsCarousel = () => {
  return (
    <View style={{ flex: 1 }}>
    <Carousel
        width={width}
        height={width / 1.5}
        data={[...new Array(6).keys()]}
        scrollAnimationDuration={1000}
        onSnapToItem={(index) => console.log('current index:', index)}
        renderItem={({ index }) => (
            <View
                style={{
                    flex: 1,
                    borderWidth: 1,
                    justifyContent: 'center',
                }}
            >
                <Text style={{ textAlign: 'center', fontSize: 30 }}>
                    {index}
                </Text>
            </View>
        )}
    />
</View>
  )
}

export default DetailsCarousel

const styles = StyleSheet.create({})