import React from 'react'
import styles from './Button.module.scss'

export default function Button({ children, onClick }) {
  return (
    <div onClick={onClick}>
      <button className={styles.button}>{children}</button>
    </div>
  )
}
