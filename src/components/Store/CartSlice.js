import { createSlice } from "@reduxjs/toolkit";
const CartSlice=createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        Add(state,actions){
            state.push(actions.payload)
        },
        Remove(state,actions){
            return state.filter((item)=>item.id !==actions.payload)
        },
        setCart(state,actions){
            return actions.payload;
        }
    }
})
export const {Add,Remove,setCart}=CartSlice.actions;
export default CartSlice.reducer;