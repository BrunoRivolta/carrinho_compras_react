import Footer from 'Components/Footer'
import Header from 'Components/Header'
import Navigation from 'Components/Navigation'
import CartProvider from 'Context/cart'
import OrderProvider from 'Context/order'
import React from 'react'
import { Outlet } from 'react-router-dom'

export default function StandardPage() {
  return (
    <main>
        <CartProvider>
          <OrderProvider>
            <Navigation /> 
            <Header />
              <Outlet />
            <Footer /> 
          </OrderProvider>
        </CartProvider>
    </main>
  )
}



