import React, { useState } from 'react'
import Product from './Product'
import styles from './Products.module.scss'
import db from './db.json'
import Modal from 'Components/Modal'


export default function Products() {

  const [modal, setModal] = useState(false)
  const [product, setProduct] = useState(false)


  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Produtos:</h2>
      <div className={styles.products}>
        {db.map(product => {
          return <Product 
            key={product.id} 
            img={product.img} 
            title={product.title} 
            price={product.price} 
            onClick={() => {
              setProduct(product)
              setModal(true)
            }}
          />
        })}
      </div>
      <Modal isOpen={modal} product={product} setModal={() => setModal(!modal)}/>
    </section>
    )
}
