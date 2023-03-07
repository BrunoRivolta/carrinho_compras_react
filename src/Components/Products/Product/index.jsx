import React from 'react'
import styles from './Product.module.scss'

export default function Product() {
  return (
    <div className={styles.container}>
        <img src="https://http2.mlstatic.com/D_NQ_NP_917352-MLA52349227590_112022-O.webp" alt="Controle Playstation" />
        <h2>Controle joystick sem fio Sony PlayStation Dualshock 4 green...</h2>
        <h1>R$ 178</h1>
        <p>em 5x 35,60 centavos sem juros</p>
        <p>frete grátis</p>
    </div>
  )
}
