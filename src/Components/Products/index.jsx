import React, { useContext, useEffect, useState } from 'react'
import Product from './Product'
import styles from './Products.module.scss'
import dbJson from './db.json'
import Modal from 'Components/Modal'
import { SearchContext } from 'Context/search'

export default function Products() {

  const { search } = useContext(SearchContext)

  const [modal, setModal] = useState(false)
  const [product, setProduct] = useState(false)
  const [db, setDb] = useState([])

  useEffect(() => {
    if(search.length === 0) {
      setDb(dbJson)
    } else {
      const dbFilter = []
      const filter = dbJson.forEach(item => {
        if(item.title.includes(search)) {
          dbFilter.push(item)
        }
      })
      setDb(dbFilter)
    }
  }, [search])

  return (
    <section className={styles.container} >
      <h2 className={styles.title}>Produtos:</h2>
      <div className={styles.products}>
        {db.map(product => {
          return <Product 
            key={product.id} 
            img={product.img} 
            title={product.title} 
            price={product.price} 
            onClick={() => {
              setProduct(product)
              setModal(true)
            }}
          />
        })}
        <div className={styles.alert}>
          <h2>A busca não encontrou resultados!</h2>
        </div>
      </div>
      <Modal isOpen={modal} product={product} setModal={() => setModal(!modal)}/>
    </section>
    )
}
