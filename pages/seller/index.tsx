import React from 'react';
import SellerSidebar from '../../components/seller_sidebar';
import styles from "../../styles/photos.module.scss";
import PhotoWithButton from "../../components/photoWithButton";


const pix: {url: string, label: string, title:string, age:number}[]= [
    {url: "https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/451706/item/goods_35_451706.jpg?width=750", label: "MEN", title:"Shop Men", age:20},
    {url:"https://im.uniqlo.com/global-cms/spa/res72e1bb01171b2a38ff292f6dadde0a6ffr.jpg", label:"WOMEN", title:"Shop Women",age:20},
    {url:"https://im.uniqlo.com/global-cms/spa/res963e03ce1557a01b296cbf4a4c210766fr.jpg", label:"SIGN UP", title:"Become Our Member", age:20},
    {url:"https://im.uniqlo.com/global-cms/spa/res963e03ce1557a01b296cbf4a4c210766fr.jpg", label:"SIGN UP", title:"Become Our Member", age:20},
    {url:"https://im.uniqlo.com/global-cms/spa/res963e03ce1557a01b296cbf4a4c210766fr.jpg", label:"SIGN UP", title:"Become Our Member", age:20},
    {url:"https://im.uniqlo.com/global-cms/spa/res963e03ce1557a01b296cbf4a4c210766fr.jpg", label:"SIGN UP", title:"Become Our Member", age:20},
    {url:"https://im.uniqlo.com/global-cms/spa/res963e03ce1557a01b296cbf4a4c210766fr.jpg", label:"SIGN UP", title:"Become Our Member", age:20}
]

// const pix: {url: string, label: string, title:string, age:number}[]= [];
function SellerMain(){
 return <div className="seller_main_wrapper">
<SellerSidebar/>
<h2 className="seller_main_title">Current Products:</h2>
<div className="photoGrid_wrapper">
<div className={styles.photos_grid_container}>
{pix.map((pic)=>{
return (<PhotoWithButton picture={pic}>
</PhotoWithButton>);
})
}
</div>
</div>
</div>
}

export default SellerMain;