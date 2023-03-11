import Cart from 'Pages/Cart'
import Requests from 'Pages/Requests'
import StandardPage from 'Pages/StandardPage'
import Store from 'Pages/Store'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function Router() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<StandardPage />} >
            <Route index element={<Store />} ></Route>
            <Route path='/carrinho' element={<Cart />} ></Route>
            <Route path='/pedidos' element={<Requests />} ></Route>
            <Route path="*" element={<div>Pagina não encontrada!</div>} />
          </Route>
        </Routes>
    </BrowserRouter> 
  )
}
