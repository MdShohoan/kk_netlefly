"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
function page() {
    const router = useRouter()
    const placeOrder = () =>{
        alert("order confirmed")
        router.push("/")
    }
  return (
    <div>
        <h1>Product page</h1>
        <li>Buy Iphone</li>
        <button className=''onClick={placeOrder}>Confirm order</button>
        
        
    </div>
  )
}

export default page