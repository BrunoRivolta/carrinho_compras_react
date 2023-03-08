import CartProvider from 'Context/cart'
import React from 'react'
import { Outlet } from 'react-router-dom'

export default function StandardPage() {
  return (
    <main>
      <CartProvider>
        <Outlet />
      </CartProvider>
    </main>
  )
}



