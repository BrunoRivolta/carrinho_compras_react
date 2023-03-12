import React from 'react'
import styles from './Product.module.scss'

export default function Product({ img, title, price, onClick }) {

  const roundedPrice = Math.floor(price)
  const leftover = (price - roundedPrice).toFixed(2)

  return (
    <div onClick={onClick} className={styles.container}>
      <div className={styles.image}>
        <img src={img} alt={title} />
      </div>
      <div className={styles.text}>
        <h2>{title}</h2>
        <div className={styles.price}>
          <h1>R$ {roundedPrice}</h1>
          <p>.{leftover * 100}</p>
          <h2 className={styles.slice}>em 5x de R${(price / 5).toFixed(2)} sem juros</h2>
        </div>
        <p>frete grátis</p>
      </div>
    </div>
  )
}
