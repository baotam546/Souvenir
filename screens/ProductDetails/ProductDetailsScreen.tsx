import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import MainCarousel from '../../components/MainCarousel';
import DetailsCarousel from './components/Carousel';
import { Ionicons } from '@expo/vector-icons';
import { StarRatingDisplay } from 'react-native-star-rating-widget';
import { useDispatch } from 'react-redux';
import { addItemstoCart } from '../../redux/slices/CartSlice';


const Category = [
  { id: 1, name: "Teddy" },
  { id: 2, name: "Car" },
];

const Product = [
  { id: 1, name: "Teddy" },
  { id: 2, name: "Car" },
  { id: 3, name: "Book" },
];

const width = Dimensions.get('window').width;
const ProductDetailsScreen = () => {
  const formatPriceInVND = (price:number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
  };
  const dispatch = useDispatch();
  return (
    <ScrollView>
      <View style={styles.container}>
        <DetailsCarousel/>
      </View>
      <View style={styles.detailsContainer}>

        <Text style={{fontSize:27, fontWeight:'bold'}}>
          Teddy Bear
        </Text>
        <Text style={{fontSize:17, fontWeight:'400'}}>
          Toys
        </Text>
        <View style={styles.starContainer}>
          <StarRatingDisplay starSize={20}
        rating={4.5}
      />
      <Text>
        (255 reviews)
      </Text>
        </View>
        
        <Text style={{fontSize:22, fontWeight:'700'}}>
          {formatPriceInVND(100000)}
        </Text>
        <Text style={{fontSize:20, fontWeight:'500'}}>
          Description
        </Text>
        <Text style={{fontSize:15, fontWeight:'400', color:'#abababf', marginBottom:20}}>
        Perhaps the most iconic sneaker of all-time, this original "Chicago"? colorway is the cornerstone to any sneaker collection. Made famous in 1985 by Michael Jordan, the shoe has stood the test of time, becoming the most famous colorway of the Air Jordan 1. This 2015 release saw the ...More
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.cartButton}
        onPress={
          ()=>{
            dispatch(addItemstoCart({id:'1', name:"Teddy", price:100000, quantity:1}))
          }}
        >
          <Ionicons name='cart' size={20} color="white"/>
          <Text style={styles.buttonText}>
            Add to cart
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buyNowButton}>
          <Ionicons name='cash' size={20} color="white"/>
          <Text style={styles.buttonText}>
            Buy now
          </Text>
        </TouchableOpacity>
      </View>
      
    </ScrollView>
  )
}

export default ProductDetailsScreen

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    detailsContainer:{
      paddingHorizontal:10,
      marginTop:10,
      display:"flex",
      flexDirection:"column",
      gap:5,
    },
    starContainer:{
      display:"flex",
      flexDirection:"row",
      gap:5,

    },
    nameContainer:{
      display:"flex",
      flexDirection:"column",
      gap:5,
      marginTop:10
    },
    buttonContainer:{
      display:"flex",
      flexDirection:"row",
      paddingHorizontal:10,
      gap:5,
      marginTop:10,
      width:width,
    },
    cartButton:{
      width:'auto',
      display:"flex",
      flexDirection:"row",
      gap:5,
      alignItems:"center",
      justifyContent:"center",
      backgroundColor:"#f45656",
      padding:10,
      borderRadius:10
    },
    buyNowButton:{
      width:'auto',
      display:"flex",
      flexDirection:"row",
      gap:5,
      alignItems:"center",
      justifyContent:"center",
      backgroundColor:"#278af4",
      padding:10,
      borderRadius:10
    },
    buttonText:{
      fontSize:20,
      color:"white",
      fontWeight:"bold"
    }
  })