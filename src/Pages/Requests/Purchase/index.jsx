import React from 'react'
import styles from './Purchase.module.scss'

export default function Purchase({ request }) {

  return (
    <div className={styles.item}>
        <div className={styles.item}>
          {request.map((product, index) => (
            <section>
              <p>1 = </p>
              <p key={index}>{product.title}</p>
            </section>
          ))}
        </div>
    </div>
  )
}
