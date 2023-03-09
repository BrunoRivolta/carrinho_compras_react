import React from 'react'
import Product from './Product'
import styles from './Products.module.scss'
import db from './db.json'

export default function Products() {
  return (
    <section className={styles.container}>
      <div>Products</div>
      <div className={styles.products}>
        {db.map(product => {
          return <Product 
            key={product.id} 
            img={product.img} 
            title={product.title} 
            description={product.description} 
            price={product.price} 
          />
        })}
      </div>
    </section>
    )
}
