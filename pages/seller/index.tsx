import React, {useState, useEffect} from 'react';
import type {RootState} from '../../redux/store';
import { useSelector, useDispatch } from 'react-redux'
import {set_up, delete_product} from '../../redux_reducer/productsSlice';
import SellerSidebar from '../../components/seller_sidebar';
import styles from "../../styles/photos.module.scss";
import PhotoWithButton from "../../components/photoWithButton";
import { connect } from "react-redux"

type props = {
    all_items: {id:number, image: string, label: string, title:string, price:string}[],
    set_up: any,
    delete_product: any
}

const demo: {id: number, image: string, label: string, title:string, price:string}[]= [
    {id:1, image: "https://image.s5a.com/is/image/saks/0400018051658_CHARCOAL?wid=534&hei=712&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0", label: "MEN", title:"Vest", price:"$20"},
    {id:2, image:"https://image.s5a.com/is/image/saks/0400018051634_WHITE?wid=534&hei=712&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0", label:"WOMEN", title:"Tank",price:"$20"},
    {id:3, image:"https://image.s5a.com/is/image/saks/0400017965918_WHITE?wid=534&hei=712&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0", label:"SIGN UP", title:"T-shirt", price:"$20"},
    {id:4, image:"https://image.s5a.com/is/image/saks/0400018051357_LIGHTBLUE?wid=534&hei=712&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0", label:"SIGN UP", title:"T-shirt", price:"$20"},
    {id:5, image:"https://image.s5a.com/is/image/saks/0400017965956_WHITE?wid=534&hei=712&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0", label:"SIGN UP", title:"T-shirt", price:"$20"},
    {id:6, image:"https://image.s5a.com/is/image/saks/0400017900854_WHITE?wid=534&hei=712&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0", label:"SIGN UP", title:"T-shirt", price:"$20"},
    {id:7, image:"https://im.uniqlo.com/global-cms/spa/res963e03ce1557a01b296cbf4a4c210766fr.jpg", label:"SIGN UP", title:"Fleece", price:"$20"}
]

// const pix: {url: string, label: string, title:string, age:number}[]= [];
function SellerMain({all_items, set_up, delete_product}: props){
    // const items = useSelector((state: RootState) => state.products.all_products)
    console.log(all_items);
    const dispatch = useDispatch()
    // useEffect(()=>{
    //   dispatch(set_up(demo));
    // }, []);

// console.log(items);
 return <div className="seller_main_wrapper">
<SellerSidebar/>
<h2 className="seller_main_title">Current Products</h2>
<div className="photoGrid_wrapper">
<div className={styles.photos_grid_container}>
{all_items.map((pic)=>{
return (<PhotoWithButton picture={pic} place="seller_main">
<p className={styles.title}>{pic.title}</p>
<p className={styles.price}>{pic.price}</p>
<button className={styles.buttons} onClick={()=>{
    dispatch(delete_product(pic.id))
}}>remove</button>
</PhotoWithButton>);
})
}
</div>
</div>
{/* <div>
    <img src="../../images/black_shoes.png"/>
</div> */}
</div>
}

// export default SellerMain;

const mapStateToProps = (state: RootState) => ({
    all_items: state.products.all_products,
});

const mapDispatchToProps = (dispatch: any) => ({
    set_up: set_up,
    delete_product: delete_product
});



export default connect(mapStateToProps, mapDispatchToProps)(SellerMain);