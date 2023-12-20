import { createSlice } from "@reduxjs/toolkit";
export const STATUS=Object.freeze({
    IDEL:'idel',
    ERROR:'error',
    LOADING:'loading',
})
const ProductSlice = createSlice({
  name: 'product',
  initialState: [],
  reducers: {
    setProduct(state, action) {
      state.data=action.payload;
    },
  }
});
export const {setProduct}=ProductSlice.actions;
export default ProductSlice.reducer;


// export function Fetchproduct(){
//    return async function FetchProductData(dispatch,getState){
//       try{
//         const res=await fetch('https://dummyjson.com/products')
//         const data=await res.json();
//         dispatch(setProduct(data))
//       }
//       catch (err){
//             dispatch()
//       }
//    }
// }