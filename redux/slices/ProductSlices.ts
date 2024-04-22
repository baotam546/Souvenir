import { createSlice } from "@reduxjs/toolkit"

const ProductsSlice = createSlice({
    name: "products",
    initialState: {
        data:null,
        isLoading:false,
    },
    reducers:{
        addProducts:(state,action)  =>{
            state = action.payload;
        },

    }
})
export const {addProducts} = ProductsSlice.actions;
export default ProductsSlice.reducer;