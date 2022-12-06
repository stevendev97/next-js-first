import React from 'react';
import styles from '../styles/cart.module.css';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {useShoppingCart} from '../contexts/cartContext';

type props = {id: number, title:string, image:string, price:string, quantity: number}

export default function InBagIndividual({id,title,image,price, quantity}: props){
    const {increaseQuantity, decreaseQuantity, removeFromCart} = useShoppingCart()
    return <div className={styles.checkout_product}>
           <img src={image} className={styles.check_image}/>
           <div className={styles.check_info}>
           <p className={styles.check_title}>{title}</p>
           <div className={styles.quantity_container}>
           <button className={styles.plus_minus_btn} onClick={()=>{increaseQuantity(id,title,image,price)}}><AddIcon /></button>
           <div> {quantity}</div>
           <button className={styles.plus_minus_btn} onClick={()=>{decreaseQuantity(id)}}><RemoveIcon/></button>
           </div>
           <p className={styles.checkout_price}>
                    <strong>{price}</strong>
           </p>
           <button className = {styles.remove_btn} onClick={()=>{
           removeFromCart(id);
           }}>Remove</button>
           
           </div>
    </div>
}