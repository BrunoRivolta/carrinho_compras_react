import React from 'react'
import logo from 'assets/img/code.png'
import styles from './Header.module.scss'

export default function Header() {
  return (
    <section className={styles.container}>
      <div className={styles.logo}>
        <img  src={logo} alt="" />
        <h1>Loja Dev</h1>
      </div>
      <div className={styles.search}>
        <h1>Busca</h1>
      </div>
    </section>
  )
}
