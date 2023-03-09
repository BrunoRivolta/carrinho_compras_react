import CartProvider from 'Context/cart'
import ProductsProvider from 'Context/products'
import React from 'react'
import { Outlet } from 'react-router-dom'

export default function StandardPage() {
  return (
    <main>
      <ProductsProvider>
        <CartProvider>
          <Outlet />
        </CartProvider>
      </ProductsProvider>
    </main>
  )
}



