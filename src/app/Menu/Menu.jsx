"use client"
import React from 'react'
import Link from "next/link";
import { usePathname } from 'next/navigation';

function Menu() {
    const pathname = usePathname()
  return (
    <ul>
    <li><Link href="/" className={`${pathname=== "/"?"active":""}`}>Home</Link></li>
    <li><Link href="/about"className={`${pathname=== "/about"?"active":""}`}>About</Link></li>
    <li><Link href="/class"className={`${pathname=== "/class"?"active":""}`}>class</Link></li>
    
  </ul>
  )
}

export default Menu