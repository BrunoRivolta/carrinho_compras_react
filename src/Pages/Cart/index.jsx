import Button from 'Components/Button'
import { CartContext } from 'Context/cart'
import { OrderContext } from 'Context/order'
import React, { useContext, useEffect, useState } from 'react'
import styles from './Cart.module.scss'
import CartProduct from './CartProduct/CartProduct'

export default function Cart() {

  const { setOrder } = useContext(OrderContext) 
  const { cart, setCart } = useContext(CartContext)
  const [total, setTotal] = useState(0) 
  const [emptyCart, setEmptyCart] = useState(true)
  const [completedPlay, setCompletedPay] = useState(false)
  
  useEffect(() => {
    let total = 0

    if(cart.length === 0) {
      setEmptyCart(true)
    } else {
      cart.forEach(item => {
        total += item.price
      })
      setEmptyCart(false)
    }
    setTotal(total)
  }, [cart])
  
  function payment() {
    setOrder(cart)
    setCart([])
    setCompletedPay(true)
  }

  const buttonState = emptyCart === true ? 'none' : 'block' 
  const payState = completedPlay === false ? 'none' : 'block'
  const alertEmptyState = emptyCart === false ? 'none' : 'block'  

  return (
    <section className={styles.container} >
      <h2 className={styles.title}>Carrinho:</h2>
      <div className={styles.products}>
        {cart.map(item => (
          <CartProduct 
            key={item.id}
            img={item.img} 
            title={item.title} 
            price={item.price} 
            qnt={item.qnt}
          />
        ))}
      </div>
      <div className={styles.empty} style={{ display: alertEmptyState }}>
        <h2>Sem itens no carrinho!</h2>
      </div>
      <div className={styles.total}>
        <h2>Total:</h2>
        <p>R$ {total.toFixed(2)}</p>
      </div>
      <div className={styles.button} style={{ display: buttonState }} >
        <Button onClick={() => payment()}>Pagar!</Button>
      </div>
      <div className={styles.alert} style={{ display: payState }}>
        <h2>Pagamento feito com sucesso!</h2>
        <p>Acesse a pagina de pedido para acompanhar a entrega</p>
      </div>
    </section>
  )
}
