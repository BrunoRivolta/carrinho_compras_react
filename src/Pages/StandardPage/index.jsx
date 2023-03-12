import Footer from 'Components/Footer'
import Header from 'Components/Header'
import Navigation from 'Components/Navigation'
import CartProvider from 'Context/cart'
import OrderProvider from 'Context/order'
import SearchProvider from 'Context/search'
import React from 'react'
import { Outlet } from 'react-router-dom'

export default function StandardPage() {
  return (
    <main>
        <CartProvider>
          <OrderProvider>
            <SearchProvider>
              <Navigation /> 
              <Header />
                <Outlet />
              <Footer /> 
            </SearchProvider>
          </OrderProvider>
        </CartProvider>
    </main>
  )
}



