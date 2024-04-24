import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from '../slices/ProductSlices';
import CartReducer from "../slices/CartSlice";
import AddressReducer from "../slices/AddressSlice";
export const store = configureStore({
    reducer:{
        product: ProductReducer,
        cart: CartReducer,
        address: AddressReducer,
    }
})