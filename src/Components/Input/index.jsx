import React from 'react'
import styles from './Input.module.scss'

export default function Input({ toAlter, type, min, placeholder }) {

    const toType = (event) => {
        toAlter(event.target.value)
    }

  return (
    <input 
      className={styles.input}
      type={type} 
      required
      onChange={toType} 
      min={min}
      placeholder={placeholder}
    />
  )
}
