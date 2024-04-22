import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from '../slices/ProductSlices';
export const store = configureStore({
    reducer:{
        product: ProductReducer
    }
})