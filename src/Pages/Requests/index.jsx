import { OrderContext } from 'Context/order'
import React, { useContext } from 'react'
import Purchase from './Purchase'
import styles from './Requests.module.scss'

export default function Requests() {

  const { order } = useContext(OrderContext) 

  const emptyRequest = order.length === 0 ? 'block' : 'none'

  return (
    <section className={styles.container} >
      <h2 className={styles.title}>Pedidos:</h2>
        {order.map((order, index) => (
          <section className={styles.products} key={index}>
            <div className={styles.info}>
              <h2 className={styles.subtitle}>Pedido {order[0]}</h2>
              <h2 className={styles.subtitle}>Itens:</h2>
              <Purchase request={order[1]}/>
            </div>
            <div className={styles.status}>
              <h2 className={styles.subtitle}>Status:</h2>
              <p className={styles.active}>✓ Separando pedido</p>
              <p>✓ Enviado para transportadora</p>
              <p>✓ Pedido a caminho</p>
              <p>✓ Pedido entregue</p>
            </div>
          </section>
        ))}
      <div className={styles.empty} style={{ display: emptyRequest }}>
        <h2>Sem pedidos no momento!</h2>
      </div>
    </section>
  )
}
