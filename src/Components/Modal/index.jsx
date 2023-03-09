import { CartContext } from 'Context/cart'
import React, { useContext } from 'react'
import styles from './Modal.module.scss'

export default function Modal({ isOpen, setModal, product }) { 

    const { cart, setCart } = useContext(CartContext)


    function addCart(product) {
        const newCart = cart
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

    /*const product = {
        id: 1,
        title: 'Controle joystick sem fio Sony PlayStation Dualshock 4 green...',
        img: "https://http2.mlstatic.com/D_NQ_NP_917352-MLA52349227590_112022-O.webp",
        price: 178,
        amount: 1
    }*/

    if(isOpen) {        
        return (
            <div className={styles.background}>
                <div className={styles.modal}>
                    <button onClick={setModal}>Fechar</button>
                    <div className={styles.main}>
                        <div className={styles.imgContainer}>
                            <img src={product.img} alt={product.title} />
                        </div>
                        <div className={styles.info}>
                            <h1>{product.title}</h1>
                            <h1>R$ {product.price}</h1>
                            <p>em 5x 35,60 sem juros</p>
                            <p>frete grátis</p>
                            <p>Quantidade</p>
                            <input type="number" name="" id="" />
                            <button onClick={() => addCart(product)}>Adicionar ao carrinho</button>
                        </div>
                    </div>
                    <div className={styles.description}>
                        <h2>Descrição</h2>
                        <p>{product.description}</p>
                    </div>
                </div>
            </div>
        )
    } else {
        return (null)
    }
}