import React from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai';
import styles from './CloseButton.module.scss' 

export default function CloseButton() {
  return (
    <AiOutlineCloseCircle className={styles.icon}/>
  )
}
