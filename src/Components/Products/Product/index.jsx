import React from 'react'
import styles from './Product.module.scss'

export default function Product({ img, title, price }) {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={img} alt={title} />
      </div>
      <div className={styles.text}>
        <h2>{title}</h2>
        <div className={styles.price}>
          <h1>R$ {price}</h1>
          <p>em 5x 35,60 sem juros</p>
        </div>
        <p>frete grátis</p>
      </div>
    </div>
  )
}
