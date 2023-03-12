import React from 'react'
import styles from './Purchase.module.scss'

export default function Purchase({ request }) {

  return (
    <div >
      {request.map((product, index) => (
        <section key={index} className={styles.item}>
          <span className={styles.prod} >1 - {product.title}</span>
        </section>
      ))}
    </div>
  )
}
