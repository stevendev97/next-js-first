import React, {useState, useContext} from 'react';
import styles from "../styles/productPhoto2.module.scss";
import {useShoppingCart} from '../contexts/cartContext';
import { useRouter } from "next/router";

type props = {pic:
    {image: string, id: number, title:string, price:string, label:string},
};

function PhotoWithoutButton({pic}: props){
    const {increaseQuantity} = useShoppingCart()
    const [clickedColor, setClickedColor] = useState<string>('');
    const [clickedSize, setClickedSize] = useState<string>('');
    const router = useRouter();
    const colors: string[] = ["lightblue", "#d97e93", '#86bf8c', 'white', 'lightgrey', '#bf8fcf', "#4d3534", 'lightyellow', '#2b2a2a', "lightpink"];
    const sizes: string[] = ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'];
    return (<>
        <div className={styles.grid_item}>
        <img src={pic.image} alt={pic.title} className={styles.img} onClick={()=>{router.push(`men/${pic.id}`)}}/>   
        {/* default men->add if later */}
        <p className={styles.title}>{pic.title}</p>
        <p className={styles.age}>{pic.price}</p>
        <div className={styles.color_grid}>
           {colors.map((color)=>{return <div className={color === clickedColor ? styles.clicked_square 
            : styles.square} style={{backgroundColor: `${color}`}} onClick={()=>{setClickedColor(color)}}></div>})}
        </div>
        </div>
        <div className={styles.size_section}>
               <p>Quick Add</p>
               <div className={styles.size_grid}>
               {sizes.map((size)=>{return <div className={size === clickedSize ? styles.clicked_square 
                : styles.square} onClick={()=>{setClickedSize(size)}}>{size}</div>})}
               </div>
               <button onClick={()=>{
                increaseQuantity(pic.id, pic.title, pic.price, pic.image)}}
                // setCartItems([...cartItems, {id:pic.id, image:pic.image, title:pic.title, price:pic.price}]);
                // console.log(cartItems);
               >Add</button>
        </div>
        </>);
}

export default PhotoWithoutButton;