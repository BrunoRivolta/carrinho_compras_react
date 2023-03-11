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
  
  useEffect(() => {
    let total = 0
    cart.forEach(item => {
      total += item.price
    })
    setTotal(total)
  }, [cart])
  
  function payment() {
    setOrder(cart)
    setCart([])
  }

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
      <div className={styles.total}>
        <h2>Total:</h2>
        <p>R$ {total.toFixed(2)}</p>
      </div>
      <div className={styles.button}>
        <Button onClick={() => payment()}>Pagar!</Button>
      </div>
      <div className={styles.alert}>
        <h2>Pagamento feito com sucesso!</h2>
        <p>Acesse a pagina de pedido para acompanhar a entrega</p>
      </div>
    </section>
  )
}
