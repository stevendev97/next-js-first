import React, { useState } from 'react';
import styles from "../styles/photos.module.scss";
import { useRouter } from "next/router";



function PhotosGrid(){
    const router = useRouter();
    const [cur_label, setCur_label] = useState('MEN')
    const pix: {url: string, label: string, title:string, age:number}[]= [
        {url: "https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/451706/item/goods_35_451706.jpg?width=750", label: "MEN", title:"Shop Men", age:20},
        {url:"https://im.uniqlo.com/global-cms/spa/res72e1bb01171b2a38ff292f6dadde0a6ffr.jpg", label:"WOMEN", title:"Shop Women",age:20},
        {url:"https://im.uniqlo.com/global-cms/spa/res963e03ce1557a01b296cbf4a4c210766fr.jpg", label:"SIGN UP", title:"Become Our Member", age:20}
    ]
    const labels: string[] = ["MEN", "WOMEN", "SIGN UP"]
    return (
        <div className={styles.body}>
        <div className={styles.choice_labels}>
        {labels.map((label)=>{return <>
        {label === cur_label ? <button className={styles.choice_underlined} 
        onClick={()=>{setCur_label(label);}}>{label}</button> 
        : <button className={styles.choice} 
        onClick={()=>{setCur_label(label);}}>{label}</button>}
        
        </>})}
        </div>
        <br/>
        {pix.filter((pic)=>{return pic.label === cur_label}).map((pic)=>{
            return (<div className={styles.grid_item}>
            <img src={pic.url} alt={pic.title} className={styles.img}/>
            <button className={styles.buttons} onClick={()=>{
                if(pic.title === "Become Our Member"){
                    router.push('/register')}
                }}>{pic.title}</button>
        </div>);
        })
        }
        <div className={styles.photos_grid_container}>
        {pix.map((pic)=>{
            return (<div className={styles.grid_item}>
            <img src={pic.url} alt={pic.title} className={styles.img}/>
            <button className={styles.buttons} onClick={()=>{
                if(pic.title === "Become Our Member"){
                    router.push('/register')}
                }}>{pic.title}</button>
        </div>);
        })
        }
        </div>
         </div>
    );
};

export default PhotosGrid;