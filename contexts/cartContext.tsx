import React, {createContext, ReactNode, useContext, useState} from 'react';

type ShoppingCartProviderProps = {
    children: ReactNode
}

type CartItem = {
    id: number
    title: string
    quantity: number
    price: string
    image: string
}

type ShoppingCartContext = {
    getItemQuantity: (id: number)=> number,
    increaseQuantity: (id:number, 
        title: string,
        price: string,
        image: string)=> void,
    decreaseQuantity: (id:number)=> void,
    removeFromCart: (id:number)=> void,
    cartQuantity: number,
    totalPrice: number,
    cartItems: CartItem[]
}

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
    return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({children}: ShoppingCartProviderProps){
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );
  const totalPrice = cartItems.reduce((total, item)=> 
  total+(item.quantity*parseInt(item.price.slice(1))), 0);
  
  function getItemQuantity(id: number){
    return cartItems.find(item=>item.id === id)?.quantity || 0
  }
  function increaseQuantity(id: number, title: string, price: string, image: string){
  setCartItems(currItems => {
    if(currItems.find(item=>item.id === id) == null){
        return [...currItems, {id,quantity:1, title, price, image}]
    }else {
        return currItems.map(item=>{
            if(item.id === id){
                return {...item, quantity:item.quantity+1}
            }else {
                return item
            }
        })
    }
  })
  }

  function decreaseQuantity(id: number){
    setCartItems(currItems => {
        if(currItems.find(item=>item.id === id)?.quantity === 1){
            return currItems.filter(item=>item.id !== id);
        }else {
            return currItems.map(item=>{
                if(item.id === id){
                    return {...item, quantity:item.quantity-1}
                }else {
                    return item
                }
            })
        }
      })
  }

  function removeFromCart(id: number){
    setCartItems(currItems => {
        return currItems.filter(item => item.id !== id);
    })
  }

  return (<ShoppingCartContext.Provider value={{getItemQuantity, increaseQuantity, decreaseQuantity,removeFromCart,cartItems, totalPrice, 
    cartQuantity}}>
    {children}
  </ShoppingCartContext.Provider>);
}

// type initialState = {
//     cartItems: {id:number,title:string, image:string, price:string}[],
//     setCartItems:(cartItems: {id:number,title:string, image:string, price:string}[]) => void
// }

// const cart: {id:number,title:string, image:string, price:string}[] = 
// [{id:0, title:"Cotton T-shirt", image:"https://image.s5a.com/is/image/saks/0400018051357_LIGHTBLUE?wid=534&hei=712&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0", price: "$30"},
// {id:1, title:"Wool Vest", image:"https://image.s5a.com/is/image/saks/0400018051658_CHARCOAL?wid=534&hei=712&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0", price: "$50"},
// {id:2, title:"Cotton T-shirt", image:"https://image.s5a.com/is/image/saks/0400017965956_WHITE?wid=534&hei=712&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0", price: "$30"}]

// const initialState = {
//     cartItems: cart,
//     setCartItems: (cartItems: {id:number,title:string, image:string, price:string}[])=>{}
// };

// const cartContext = React.createContext(initialState);

// export default cartContext;