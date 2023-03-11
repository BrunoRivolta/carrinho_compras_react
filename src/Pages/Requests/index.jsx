import { OrderContext } from 'Context/order'
import React, { useContext } from 'react'
import Purchase from './Purchase'
import styles from './Requests.module.scss'

export default function Requests() {

  const { order } = useContext(OrderContext) 

  return (
    <section className={styles.container} >
      <h2 className={styles.title}>Pedidos:</h2>
      <div className={styles.products}>
        {order.map((order, index) => (
          <section key={index}>
            <h1>Pedido: {order[0]}</h1>
            <h1>Itens:</h1>
            <Purchase request={order[1]}/>
          </section>
        ))}
      </div>
      <div className={styles.empty} style={{ display: 'block' }}>
        <h2>Sem itens no carrinho!</h2>
      </div>
    </section>
  )
}
