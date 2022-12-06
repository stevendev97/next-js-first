import React from 'react';
import styles from '../styles/cart.module.css';
import {useShoppingCart} from '../contexts/cartContext';

function Subtotal(){
    const {cartQuantity, totalPrice} = useShoppingCart()
    return <div className={styles.subtotal}>
        <h3>
            Summary:
        </h3>
        <p> {cartQuantity} items</p>
        <strong>${totalPrice}</strong>
        <small className={styles.subtotal_gift}>
            <input type="checkbox" /> This order contains a gift
        </small>
        <button>Proceed to Checkout</button>
    </div>
}

export default Subtotal;