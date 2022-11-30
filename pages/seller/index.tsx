import React from 'react';
import SellerSidebar from '../../components/seller_sidebar';
import styles from "../../styles/photos.module.scss";
import PhotoWithButton from "../../components/photoWithButton";


const pix: {url: string, label: string, title:string, price:number}[]= [
    {url: "https://image.s5a.com/is/image/saks/0400018051658_CHARCOAL?wid=534&hei=712&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0", label: "MEN", title:"Vest", price:20},
    {url:"https://image.s5a.com/is/image/saks/0400018051634_WHITE?wid=534&hei=712&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0", label:"WOMEN", title:"Tank",price:20},
    {url:"https://image.s5a.com/is/image/saks/0400017965918_WHITE?wid=534&hei=712&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0", label:"SIGN UP", title:"T-shirt", price:20},
    {url:"https://image.s5a.com/is/image/saks/0400018051357_LIGHTBLUE?wid=534&hei=712&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0", label:"SIGN UP", title:"T-shirt", price:20},
    {url:"https://image.s5a.com/is/image/saks/0400017965956_WHITE?wid=534&hei=712&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0", label:"SIGN UP", title:"T-shirt", price:20},
    {url:"https://image.s5a.com/is/image/saks/0400017900854_WHITE?wid=534&hei=712&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0", label:"SIGN UP", title:"T-shirt", price:20},
    {url:"https://im.uniqlo.com/global-cms/spa/res963e03ce1557a01b296cbf4a4c210766fr.jpg", label:"SIGN UP", title:"Fleece", price:20}
]

// const pix: {url: string, label: string, title:string, age:number}[]= [];
function SellerMain(){
 return <div className="seller_main_wrapper">
<SellerSidebar/>
<h2 className="seller_main_title">Current Products</h2>
<div className="photoGrid_wrapper">
<div className={styles.photos_grid_container}>
{pix.map((pic)=>{
return (<PhotoWithButton picture={pic} place="seller_main">
<p className={styles.title}>{pic.title}</p>
<p className={styles.price}>${pic.price}</p>
</PhotoWithButton>);
})
}
</div>
</div>
</div>
}

export default SellerMain;