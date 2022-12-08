import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import myImage from "../images/black_shoes.png";

export interface ProductsState {
  all_products: {id:number, image: any, label: string, title:string, price:string}[]
}

const initialState: ProductsState = {
  all_products: [{id:1, image: "https://image.s5a.com/is/image/saks/0400018051658_CHARCOAL?wid=534&hei=712&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0", label: "MEN", title:"Vest", price:"$20"},
  {id:2, image:"https://image.s5a.com/is/image/saks/0400018051634_WHITE?wid=534&hei=712&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0", label:"WOMEN", title:"Tank",price:"$20"},
  {id:3, image:"https://image.s5a.com/is/image/saks/0400017965918_WHITE?wid=534&hei=712&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0", label:"SIGN UP", title:"T-shirt", price:"$20"},
  {id:4, image:"https://image.s5a.com/is/image/saks/0400018051357_LIGHTBLUE?wid=534&hei=712&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0", label:"SIGN UP", title:"T-shirt", price:"$20"},
  {id:5, image:"https://image.s5a.com/is/image/saks/0400017965956_WHITE?wid=534&hei=712&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0", label:"SIGN UP", title:"T-shirt", price:"$20"},
  {id:6, image:"https://image.s5a.com/is/image/saks/0400017900854_WHITE?wid=534&hei=712&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0", label:"SIGN UP", title:"T-shirt", price:"$20"},
  // {id:7, image:"https://im.uniqlo.com/global-cms/spa/res963e03ce1557a01b296cbf4a4c210766fr.jpg", label:"SIGN UP", title:"Fleece", price:"$20"}
  {id:7, image:"../images/black_shoes.png", label:"SIGN UP", title:"Shoes", price:"$20"}
],
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