import React from 'react'
import { useRouter } from "next/router";

function SellerSidebar() {
  const router = useRouter();
  return (
    <div className='sell-sidebar-container'>
        <div className='sell__tab'>
            <span onClick={()=>{router.replace('/seller');}}>All Products</span>
        </div>
        <div className='sell__tab'>
            <span onClick={()=>{router.replace('/seller/upload');}}>Upload Product</span>
        </div>
    </div>
  )
}

export default SellerSidebar