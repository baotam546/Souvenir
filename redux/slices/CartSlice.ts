import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface CartItem{
    id: string;
    name: string;
    price: number;
    quantity: number;
    productImage: string;
}

interface CartState {
    data: CartItem[];
}
const initialState: CartState  = {
    data: [],
};
const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        addItemstoCart: (state, action: PayloadAction<CartItem>) => {
            const { id, quantity } = action.payload;
            const existingItem = state.data.find(item => item.id === id);

            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                state.data.push(action.payload);
            }
        },
        increaseItemFromCart: (state, action: PayloadAction<CartItem>) => {
            state.data.map(item=>{
                if(item.id === action.payload.id){
                    item.quantity += 1;
                }
            })
        },
        reduceItemFromCart: (state, action: PayloadAction<CartItem>) => {
            state.data.map(item=>{
                if(item.id === action.payload.id){
                    item.quantity -= 1;
                }
            })
        },
        removeItemFromCart: (state, action: PayloadAction<CartItem>) => {
            const index = state.data.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state.data.splice(index, 1);
            }
        }
    }

})
export const {addItemstoCart, reduceItemFromCart, removeItemFromCart, increaseItemFromCart} = CartSlice.actions;
export default CartSlice.reducer;