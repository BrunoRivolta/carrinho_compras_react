import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { BsCart4 } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'
import styles from './Navigation.module.scss'
import { CartContext } from 'Context/cart'

export default function Navigation() {

    const { cart } = useContext(CartContext) 
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
            <div className={styles.cart_container}>
                <Link to={'/carrinho'} ><BsCart4 className={styles.cart} /></Link> 
                <p className={styles.cart_number}>0{cart.length}</p>
                <span className={styles.cart_back}></span>
            </div>
            <nav className={styles.links} style={menu} onClick={() => menuToggle()}>
                <Link to={'/'} className={styles.link}> Loja</Link>
                <Link to={'/carrinho'} className={styles.link}> Carrinho</Link>
                <Link to={'/pedidos'} className={styles.link}> Pedidos</Link>
                <Link to={'#'} className={styles.link}> Contato</Link>
            </nav>
        </section>
    </section>
  )
}
