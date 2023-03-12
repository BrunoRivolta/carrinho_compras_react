import React, { useContext, useState } from 'react'
import Product from './Product'
import styles from './Products.module.scss'
import db from './db.json'
import Modal from 'Components/Modal'
import { SearchContext } from 'Context/search'

export default function Products() {

  const { search } = useContext(SearchContext)

  const [modal, setModal] = useState(false)
  const [product, setProduct] = useState(false)

  const listing = db.find(item => {
    return item.title.includes('Tec')
  })

  console.log(search)

  return (
    <section className={styles.container} >
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
