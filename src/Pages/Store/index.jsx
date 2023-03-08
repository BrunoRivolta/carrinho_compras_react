import Footer from 'Components/Footer'
import Header from 'Components/Header'
import Modal from 'Components/Modal'
import Navigation from 'Components/Navigation'
import Products from 'Components/Products'
import React, { useState } from 'react'

export default function Store() {

const [modal, setModal] = useState(false)

  return (
    <> 
      <Navigation />
      <Header />
      <Products />
      <Modal isOpen={modal} setModal={() => setModal(!modal)}/>
      <button onClick={() => setModal(true)}>ola</button>
      <Footer />
    </>
  )
}
