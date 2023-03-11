import Button from 'Components/Button'
import CloseButton from 'Components/CloseButton'
import { AiOutlineCheckCircle } from 'react-icons/ai';
import Input from 'Components/Input'
import { CartContext } from 'Context/cart'
import React, { useContext, useState } from 'react'
import styles from './Modal.module.scss'

export default function Modal({ isOpen, setModal, product }) { 

    const { cart, setCart } = useContext(CartContext)
    const [ qnt, setQnt ] = useState(1)
    const [ waming, setWaming ] = useState('')
    const [ check, setCheck ] = useState('none')

    function addCart(product) { 
        let newCart = []
        product.qnt = Number(qnt)
        if(cart.length === 0) {
            newCart.push(product)
            setCart(newCart)
            setCheck('block')
        } else {
            let repeated = false
            cart.forEach(item => {
                if(item.id === product.id){
                    setWaming('O produto ja esta no carrinho!')
                    repeated = true
                } 
            })
            if(repeated === false) {
                console.log('produto adicionado')
                newCart = [...cart]
                newCart.push(product)
                setCart(newCart)
                setCheck('block')
            }
        }
    }

    document.onkeydown = function(e) {
        if(e.key === 'Escape') {
            setModal()
            setWaming('')
            setCheck('none')
        }
      }

    const roundedPrice = Math.floor(product.price)
    const leftover = (product.price - roundedPrice).toFixed(2)

    if(isOpen) {        
        return (
            <div className={styles.background}>
                <div className={styles.modal}>
                    <div 
                        onClick={() =>{
                            setModal()
                            setWaming('')
                            setCheck('none')
                        }} 
                        className={styles.closeButton}
                    >
                        <CloseButton />
                    </div>
                    <div className={styles.main}>
                        <div className={styles.imgContainer}>
                            <img src={product.img} alt={product.title} />
                        </div>
                        <div className={styles.info}>
                            <h2>{product.title}</h2>
                            <h1>R$ {roundedPrice}</h1>
                            <p className={styles.cents}>.{leftover * 100}</p>
                            <p>em 5x de R${(product.price / 5).toFixed(2)} sem juros</p>
                            <p className={styles.freight}>frete grátis</p>
                            <div className={styles.action}>
                                <Input 
                                    className={styles.qnt}
                                    toAlter={value => setQnt(value)} 
                                    type={'number'} 
                                    min={1}
                                    placeholder={1}
                                />
                                <Button 
                                    onClick={() => 
                                        addCart(product)}
                                >
                                    Adicionar ao carrinho
                                </Button>
                                <AiOutlineCheckCircle 
                                    className={styles.check}
                                    style={{ display: check }}
                                />
                            </div>
                        </div>
                        <div className={styles.description}>
                            <span>{waming}</span>
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
