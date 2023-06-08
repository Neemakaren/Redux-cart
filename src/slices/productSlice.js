import { createSlice } from "@reduxjs/toolkit";
import img from '../assets/pic-1.webp';  



const initialState = [
    {img: {img}, name: 'mine', price: 990},
    {img: {img}, name: 'mine', price: 990},
    {img: {img}, name: 'mine', price: 990},
    {img: {img}, name: 'mine', price: 990},
    {img: {img}, name: 'mine', price: 990},
    {img: {img}, name: 'mine', price: 990},
    {img: {img}, name: 'mine', price: 990},
]



const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        
    }
})

// console.log(initialState)


export default productSlice.reducer

// export function getProducts() {
//     return async function getProductsThunk(dispatch, getState) {
//       const data = await fetch('https://fakestoreapi.com/products')
//         const result = data.json()
//         dispatch(fetchProducts(result))
//     }
// }