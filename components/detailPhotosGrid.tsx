import React from 'react';
import styles from "../styles/productPhoto2.module.scss";
import PhotoWithoutButton from "./photoWithoutButton";



function DetailPhotosGrid(){
    const pix: {url: string, id: number, title:string, age:string}[]= [
        {url: "https://image.s5a.com/is/image/saks/0400018051658_CHARCOAL?wid=534&hei=712&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0", id: 1, title:"Vest", age:"$30"},
        {url:"https://image.s5a.com/is/image/saks/0400018051634_WHITE?wid=534&hei=712&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0", id:2, title:"Tank",age:"$20"},
        {url:"https://image.s5a.com/is/image/saks/0400017965918_WHITE?wid=534&hei=712&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0", id:3, title:"T-shirt", age:"$25"},
        {url: "https://image.s5a.com/is/image/saks/0400018051357_LIGHTBLUE?wid=534&hei=712&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0", id:4, title:"T-shirt", age:"$25"},
        {url: "https://image.s5a.com/is/image/saks/0400017965956_WHITE?wid=534&hei=712&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0", id:5, title:'T-shirt', age:"$30"},
        {url:"https://image.s5a.com/is/image/saks/0400017900854_WHITE?wid=534&hei=712&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0", id:6, title:"T-shirt", age:"$54"}
    ];
    const sizes: string[] = ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'];

    let i = 0;

    return (
        <div className={styles.photos_grid_container}>
        {pix.map((pic)=>{
            return (
            <div className={styles.grid_extension}>
            <PhotoWithoutButton pic={pic}>
            <div className={styles.size_section}>
               <p>Quick Add</p>
               <div className={styles.size_grid}>
               {sizes.map((size)=>{return <div className={styles.square}>{size}</div>})}
               </div>
            </div>
            </PhotoWithoutButton>
        </div> 
        );
        })
        }
        </div>
    );
};

export default DetailPhotosGrid;