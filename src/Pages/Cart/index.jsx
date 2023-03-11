import Button from 'Components/Button'
import { CartContext } from 'Context/cart'
import React, { useContext, useEffect, useState } from 'react'
import styles from './Cart.module.scss'


export default function Cart() {

  const { cart, setCart } = useContext(CartContext)
  const [total, setTotal] = useState(0) 
  
  useEffect(() => {
    let total = 0

    cart.forEach(item => {
      total += item.price
    })

    setTotal(total)

  }, [cart])
  
  return (
    <section className={styles.container} >
      <h2 className={styles.title}>Carrinho:</h2>
      <div className={styles.products}>
        {cart.map(item => (
          <div className={styles.item}>
            <div className={styles.image}>
              <img src={item.img} alt={item.title} />
            </div>
            <div className={styles.text}>
              <h2>{item.title}</h2>
              <div className={styles.price}>
                <h1>R$ {item.price}</h1>
                <p>Qnt: {item.qnt}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.total}>
        <h2>Total:</h2>
        <p>R$ {total.toFixed(2)}</p>
      </div>
      <div className={styles.button}>
        <Button >Pagar!</Button>
      </div>
    </section>
  )
}
