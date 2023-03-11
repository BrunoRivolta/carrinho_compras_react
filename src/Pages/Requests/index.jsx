import React from 'react'
import styles from './Requests.module.scss'

export default function Requests() {
  return (
    <section className={styles.container} >
      <h2 className={styles.title}>Pedidos:</h2>
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
      <div className={styles.total} style={{ display: buttonState }}>
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
