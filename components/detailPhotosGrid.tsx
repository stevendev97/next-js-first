import React, {useState, useEffect} from 'react';
import styles from "../styles/productPhoto2.module.scss";
import PhotoWithoutButton from "./photoWithoutButton";
import type {RootState} from '../redux/store';
import {store} from '../redux/store';
import { useSelector, useDispatch } from 'react-redux'
import {set_up} from '../redux_reducer/productsSlice';
import { connect } from "react-redux"

type props = {
    all_items: {id:number, image: string, label: string, title:string, price:string}[],
}

const demo: {id: number, image: string, label: string, title:string, price:string}[]= [
    {id:1, image: "https://image.s5a.com/is/image/saks/0400018051658_CHARCOAL?wid=534&hei=712&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0", label: "MEN", title:"Vest", price:"$20"},
    {id:2, image:"https://image.s5a.com/is/image/saks/0400018051634_WHITE?wid=534&hei=712&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0", label:"WOMEN", title:"Tank",price:"$20"},
    {id:3, image:"https://image.s5a.com/is/image/saks/0400017965918_WHITE?wid=534&hei=712&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0", label:"SIGN UP", title:"T-shirt", price:"$20"},
    {id:4, image:"https://image.s5a.com/is/image/saks/0400018051357_LIGHTBLUE?wid=534&hei=712&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0", label:"SIGN UP", title:"T-shirt", price:"$20"},
    {id:5, image:"https://image.s5a.com/is/image/saks/0400017965956_WHITE?wid=534&hei=712&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0", label:"SIGN UP", title:"T-shirt", price:"$20"},
    {id:6, image:"https://image.s5a.com/is/image/saks/0400017900854_WHITE?wid=534&hei=712&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0", label:"SIGN UP", title:"T-shirt", price:"$20"},
    // {id:7, image:"https://im.uniqlo.com/global-cms/spa/res963e03ce1557a01b296cbf4a4c210766fr.jpg", label:"SIGN UP", title:"Fleece", price:"$20"}
]
// {all_items}: props
function DetailPhotosGrid({all_items}: props){
    const items = useSelector((state: RootState) => state.products.all_products)
    console.log(items);
    // const dispatch = useDispatch()
    // useEffect(()=>{
    //   dispatch(set_up(demo));
    // }, []);
    let i = 0;
    return (
        <div className={styles.photos_grid_container}>
        {all_items.map((pic)=>{
            return (
            <div className={styles.grid_extension}>
            <PhotoWithoutButton pic={pic}/>
        </div> 
        );
        })
        }
        </div>
    );
};

const mapStateToProps = (state: RootState) => ({
    all_items: state.products.all_products,
})

export default connect(mapStateToProps)(DetailPhotosGrid);
// export default DetailPhotosGrid;