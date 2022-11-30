import React, {useState}from 'react';
import styles from "../styles/productPhoto2.module.scss";
import PhotoWithoutButton from "./photoWithoutButton";



function DetailPhotosGrid(){
    const [clickedItem, setClickedItem] = useState<string>('');
    const pix: {url: string, id: number, title:string, price:string}[]= [
        {url: "https://image.s5a.com/is/image/saks/0400018051658_CHARCOAL?wid=534&hei=712&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0", id: 1, title:"Vest", price:"$30"},
        {url:"https://image.s5a.com/is/image/saks/0400018051634_WHITE?wid=534&hei=712&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0", id:2, title:"Tank", price:"$20"},
        {url:"https://image.s5a.com/is/image/saks/0400017965918_WHITE?wid=534&hei=712&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0", id:3, title:"T-shirt", price:"$25"},
        {url: "https://image.s5a.com/is/image/saks/0400018051357_LIGHTBLUE?wid=534&hei=712&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0", id:4, title:"T-shirt", price:"$25"},
        {url: "https://image.s5a.com/is/image/saks/0400017965956_WHITE?wid=534&hei=712&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0", id:5, title:'T-shirt', price:"$30"},
        {url:"https://image.s5a.com/is/image/saks/0400017900854_WHITE?wid=534&hei=712&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0", id:6, title:"T-shirt", price:"$54"}
    ];
    
    let i = 0;

    return (
        <div className={styles.photos_grid_container}>
        {pix.map((pic)=>{
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

export default DetailPhotosGrid;