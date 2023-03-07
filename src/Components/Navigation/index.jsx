import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BsCart4 } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'
import styles from './Navigation.module.scss'

export default function Navigation() {

    const [menu, setMenu] = useState({ left: '-50vw' })

    function menuToggle() {
        if(menu.left === 0) {
            setMenu({ left: '-50vw' })
        } else {
            setMenu({ left: 0 })
        }
    }

  return (
    <section>
        <section className={styles.container}>
            <GiHamburgerMenu 
                className={styles.burguer}
                onClick={() => menuToggle()}
            />
            <BsCart4 className={styles.cart} />
            <nav className={styles.links} style={menu}>
                <Link to={'#'} className={styles.link}> Loja</Link>
                <Link to={'#'} className={styles.link}> Carrinho</Link>
                <Link to={'#'} className={styles.link}> Pedidos</Link>
                <Link to={'#'} className={styles.link}> Contato</Link>
            </nav>
        </section>
    </section>
  )
}
