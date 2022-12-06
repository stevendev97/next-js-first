import React,{useContext} from 'react';
import styles from '../../styles/cart.module.css'
import InBagIndividual from '../../components/productInCart';
import Subtotal from '../../components/subtotal';
import {useShoppingCart} from '../../contexts/cartContext';

function Cart(){
    const {cartItems} = useShoppingCart();
    // const [inBageProducts, setInBagProducts] = useState<{id:number,title:string, image:string, price:string}[]>([
    // {id:0, title:"Checked Jacket", image:"https://cdn.shopify.com/s/files/1/0558/6858/8147/products/MBB2JKT008L68-11_1512x.jpg?v=1652063444", price: "$30"},
    // {id:0, title:"Checked Jacket", image:"https://cdn.shopify.com/s/files/1/0558/6858/8147/products/MBB2JKT008L68-11_1512x.jpg?v=1652063444", price: "$30"},
    // {id:0, title:"Checked Jacket", image:"https://cdn.shopify.com/s/files/1/0558/6858/8147/products/MBB2JKT008L68-11_1512x.jpg?v=1652063444", price: "$30"}])
return <div className={styles.cart_summary_wrapper}>
    
     <div className={styles.cart_left}>
        <img src="https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_2816/cms/4ehvbrpGCNPGXZSasu8k0d/da39e8a94716928e67557c1c89e94dd2/CM-HP-Hero-Desktop.jpg" 
        alt="ads_banner" className={styles.checkout_ads}/>
    <h2 className={styles.cart_title}>
        Shopping Bag Overview
    </h2>
    {cartItems.map((item) => {
                            return <InBagIndividual
                                        id={item.id}
                                        title={item.title}
                                        image={item.image}
                                        price={item.price}
                                        quantity={item.quantity}
                                        key={item.id}
                                    />
                        })}
    </div>
    <div>
        <Subtotal/>
    </div>
    </div>
}
export default Cart;