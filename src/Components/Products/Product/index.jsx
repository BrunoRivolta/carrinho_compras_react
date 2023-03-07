import React from 'react'
import styles from './Product.module.scss'

export default function Product({ img, alt, description, price }) {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src="https://http2.mlstatic.com/D_NQ_NP_917352-MLA52349227590_112022-O.webp" alt="Controle Playstation" />
      </div>
      <div className={styles.text}>
        <h2>Controle joystick sem fio Sony PlayStation Dualshock 4 green...</h2>
        <div className={styles.price}>
          <h1>R$ 178</h1>
          <p>em 5x 35,60 sem juros</p>
        </div>
        <p>frete grátis</p>
      </div>
    </div>
  )
}
