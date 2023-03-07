import React from 'react'
import Product from './Product'
import styles from './Products.module.scss'

export default function Products() {
  return (
    <section className={styles.container}>
      <div>Products</div>
      <div className={styles.products}>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </section>
    )
}
