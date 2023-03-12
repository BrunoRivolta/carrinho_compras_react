import React from 'react'
import logo from 'assets/img/code.png'
import styles from './Header.module.scss'
import Button from 'Components/Button'

export default function Header() {
  return (
    <section className={styles.container}>
      <div className={styles.logo}>
        <img src={logo} alt="" />
        <h1>Loja Dev</h1>
      </div>
      <div className={styles.search}>
        <input type="text" name="" id="" />
        <Button>Buscar!</Button>
      </div>
    </section>
  )
}
