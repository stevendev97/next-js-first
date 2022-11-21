import '../styles/globals.css'
import Navbar from '../components/navbar'
import Footer from '../components/footer';

import {useState} from 'react';
import loginContext from '../contexts/loginContext';

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  const [loginStatus, setLoginStatus] = useState<boolean>(false);
  return (
    <>
      <loginContext.Provider value={{loginStatus, setLoginStatus}}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
      </loginContext.Provider>
    </>
  )
}
