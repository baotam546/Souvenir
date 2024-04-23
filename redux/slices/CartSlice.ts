import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface CartItem{
    id: string;
    name: string;
    price: number;
    quantity: number;
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

    }
})
export const {addItemstoCart} = CartSlice.actions;
export default CartSlice.reducer;