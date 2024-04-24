import { createSlice } from "@reduxjs/toolkit"

const AddressSlice = createSlice({
    name: "address",
    initialState: {
        data:[],
    },
    reducers:{
        addAddress:(state: { data: any[] }, action)  =>{
            state.data.push(action.payload);
        },

    }
})
export const {addAddress} = AddressSlice.actions;
export default AddressSlice.reducer;