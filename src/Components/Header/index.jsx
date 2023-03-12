import React, { useContext, useState } from 'react'
import logo from 'assets/img/code.png'
import styles from './Header.module.scss'
import Button from 'Components/Button'
import { SearchContext } from 'Context/search'

export default function Header() {

  const { setSearch } = useContext(SearchContext)
  const [ word, setWord ] = useState()
  const [ resetValue, setResetValue ] = useState()

  const toType = (event) => {
    setWord(event.target.value)
  }

  return (
    <section className={styles.container}>
      <div className={styles.logo}>
        <img src={logo} alt="" />
        <h1>Loja Dev</h1>
      </div>
      <div className={styles.search}>
        <input onChange={toType} type="text" value={resetValue} />
        <Button 
          onClick={() => {
            setSearch(word) 
            }}
          >
            Buscar!
          </Button>
      </div>
    </section>
  )
}
