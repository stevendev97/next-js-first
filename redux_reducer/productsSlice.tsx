import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ProductsState {
  all_products: {id:number, image: string, label: string, title:string, price:string}[]
}

const initialState: ProductsState = {
  all_products: [],
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    set_up: (state, action:PayloadAction<{id:number, image: string, label: string, title:string, price:string}[]>) => {
        const newProducts = action.payload;
        // state.all_products = newProducts
        state.all_products = newProducts
    },
    append_product: (state, action:PayloadAction<{id:number, image: string, label: string, title:string, price:string}>) => {
        const newProduct = {
            id: new Date().valueOf(),
            image: action.payload.image,
            label: action.payload.label,
            title: action.payload.title,
            price: action.payload.price
        }
        const newProducts = [...state.all_products, newProduct];
        state.all_products = newProducts;
    },
    delete_product: (state, action:PayloadAction<number>) => {
        const newProducts = state.all_products.filter((item:{id:number, image: string, label: string, title:string, price:string})=>{
            return item.id !== action.payload;
        });
        state.all_products = newProducts;
    },
  },
})


export const { set_up, append_product, delete_product } = productsSlice.actions

export default productsSlice.reducer