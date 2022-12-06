import '../styles/globals.css'
import Navbar from '../components/navbar'
import Footer from '../components/footer';

import {useState} from 'react';
import { Provider } from 'react-redux';
import {store} from '../redux/store';

import loginContext from '../contexts/loginContext';
import { ShoppingCartProvider } from "../contexts/cartContext";

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  const [loginStatus, setLoginStatus] = useState<boolean>(false);
  return (
    <>
      <Provider store={store}>
      <ShoppingCartProvider>
      {/* <loginContext.Provider value={{loginStatus, setLoginStatus}}> */}
      <Navbar />
      <Component {...pageProps} />
      <Footer />
      </ShoppingCartProvider>
      {/* </loginContext.Provider> */}
      </Provider>
    </>
  )
}
