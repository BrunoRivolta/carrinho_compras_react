import CartProvider from 'Context/cart'
import ProductProvider from 'Context/products'
import React from 'react'
import { Outlet } from 'react-router-dom'

export default function StandardPage() {
  return (
    <main>
      <ProductProvider>
        <CartProvider>
          <Outlet />
        </CartProvider>
      </ProductProvider>
    </main>
  )
}



