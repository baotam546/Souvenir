import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from '../slices/ProductSlices';
import CartReducer from "../slices/CartSlice";
export const store = configureStore({
    reducer:{
        product: ProductReducer,
        cart: CartReducer
    }
})