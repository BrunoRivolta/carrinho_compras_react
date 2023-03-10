import CloseButton from 'Components/CloseButton'
import { CartContext } from 'Context/cart'
import React, { useContext } from 'react'
import styles from './Modal.module.scss'

export default function Modal({ isOpen, setModal, product }) { 

    const { cart, setCart } = useContext(CartContext)

    function addCart(product) {
        const newCart = cart
        product.amount = 1
        if(cart.length === 0) {
            setCart([product])
        } else {
            newCart.forEach((item, index) => {
                if(product.id === item.id) {
                    const newProduct = product
                    const newAmount = product.amount + item.amount
                    newProduct.amount = newAmount
                    newCart.splice(index, 1)
                    newCart.push(newProduct)
                    setCart([newProduct])
                } else {
                    setCart(old => [...old, product])
                }
            })
        }

    }

    if(isOpen) {        
        return (
            <div className={styles.background}>
                <div className={styles.modal}>
                    <div onClick={setModal} className={styles.closeButton}>
                        <CloseButton />
                    </div>
                    <div className={styles.main}>
                        <div className={styles.imgContainer}>
                            <img src={product.img} alt={product.title} />
                        </div>
                        <div className={styles.info}>
                            <h2>{product.title}</h2>
                            <h1>R$ {product.price}</h1>
                            <p>em 5x 35,60 sem juros</p>
                            <p>frete grátis</p>
                            <input type="number" name="qnt" id="qnt" min={1} max={5}/>
                            <button onClick={() => addCart(product)}>Adicionar ao carrinho</button>
                        </div>
                        <div className={styles.description}>
                            <h2>Descrição</h2>
                            <p>{product.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (null)
    }
}