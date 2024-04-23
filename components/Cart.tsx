import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const Cart = () => {
    const cart = useSelector((state:any)=> state.cart);
    const navigate = useNavigation();
    const dataLength = cart.data?.length ?? 0;
  return (
    <TouchableOpacity 
        onPress={()=>{navigate.navigate("checkout",{screen:'checkout-screen'})}}
    >
        <Ionicons name="cart-outline" size={34} />
        <View style={{
            width:20,
            height:20,
            borderRadius:10,
            backgroundColor:'red',
            position:'absolute',
            right:0,
            top:0,
            justifyContent:'center',
            alignItems:'center',
            }}>
                <Text style={{color:'#fff'}}>{dataLength}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default Cart

const styles = StyleSheet.create({})