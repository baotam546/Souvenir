import { Dimensions, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import MainCarousel from '../../components/MainCarousel';
import DetailsCarousel from './components/Carousel';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { StarRatingDisplay } from 'react-native-star-rating-widget';
import { useDispatch, useSelector } from 'react-redux';
import { addItemstoCart, reduceItemFromCart, removeItemFromCart } from '../../redux/slices/CartSlice';
import { useRoute } from '@react-navigation/native';
import useAxiosPrivate from '../../hooks/axiosPrivate';
import { AuthContext } from '../../context/AuthContext';


const Category = [
  { id: 1, name: "Teddy" },
  { id: 2, name: "Car" },
];

const Product = [
  { id: 1, name: "Teddy" },
  { id: 2, name: "Car" },
  { id: 3, name: "Book" },
];
type Product = {
  _id:string,
  name:string,
  price:number,
  description:string,
  category:string,
  productImage:string[],
  quantity:number,
  brand:string,
  createdAt:string,
  updatedAt:string,

}
const width = Dimensions.get('window').width;
const ProductDetailsScreen = () => {
  const route = useRoute();
  const axios = useAxiosPrivate();
  const [product,setProduct] = React.useState<Product>();
  const item:any = route.params
  const [quantity, setQuantity] = useState(1);


  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const fetchData  = async() => {
    try {
      const res = await axios.get(`product/?id=${item._id}`);
      if (res.status === 200) {
        setProduct(res.data.data)
      }
    } catch (error) {
      console.log("error", error);
    }
  }
  useEffect(() => {
    fetchData();
  },[])
  const formatPriceInVND = (price:number) => {
    return new Intl.NumberFormat('us-US', { style: 'currency', currency: 'USD' }).format(price);
  };
  if(!product){
    return (
      <View>
        <Text>Something went wrong</Text>
      </View>
    )
  }
  const dispatch = useDispatch();
  return (
    <ScrollView>
      <View style={styles.container}>
        <DetailsCarousel image={product.productImage}/>
      </View>
      <View style={styles.detailsContainer}>

        <Text style={{fontSize:27, fontWeight:'bold'}}>
          {product?.name || ''}
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
          {formatPriceInVND(product?.price || 0)}
        </Text>
        <Text style={{fontSize:20, fontWeight:'500'}}>
          Description
        </Text>
        <Text style={{fontSize:15, fontWeight:'400', color:'#abababf', marginBottom:20}}>
          {product?.description || ''}
        </Text>
      </View>
      <View style={styles.priceBox}>
            <TouchableOpacity
              onPress={handleDecreaseQuantity}
              style={{ width: 30, alignItems: "center" }}
            >
              <AntDesign name="minus" size={16} />
            </TouchableOpacity>
            <TextInput
              value={quantity.toString()}
              keyboardType={"numeric"}
              style={{
                borderWidth: 1,
                textAlign: "center",
                width: 50,
                height: 40,
              }}
            />
            <TouchableOpacity
              onPress={handleIncreaseQuantity}
              style={{ width: 30, alignItems: "center" }}
            >
              <AntDesign name="plus" size={16} />
            </TouchableOpacity>
          </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.cartButton}
        onPress={
          ()=>{
            dispatch(addItemstoCart(
              {id:product._id, 
                name:product.name, 
                price:product.price, 
                quantity:quantity,
                productImage:product.productImage[0],
              }))
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
    },
    priceBox: {
      width: "auto",
      borderWidth: 1,
      borderColor: "#CACACA",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
      columnGap: 10,
    },
  })