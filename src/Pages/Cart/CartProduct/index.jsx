import React from 'react'
import styles from './CartProduct.module.scss'

export default function CartProduct({ img, title, price, qnt }) {
  return (
    <div className={styles.item}>
        <div className={styles.image}>
            <img src={img} alt={title} />
        </div>
        <div className={styles.text}>
            <h2>{title}</h2>
            <div className={styles.price}>
              <h1>R$ {price}</h1>
              <p>Qnt: {qnt}</p>
            </div>
        </div>
    </div>
  )
}
