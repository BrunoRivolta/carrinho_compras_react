import React from 'react'
import styles from './Modal.module.scss'

export default function Modal({ isOpen, setModal }) {
    if(isOpen) {
        return (
            <div className={styles.background}>
                <div className={styles.modal}>
                    <button onClick={setModal}>Fechar</button>
                    <div className={styles.main}>
                        <div className={styles.imgContainer}>
                            <img src="https://http2.mlstatic.com/D_NQ_NP_917352-MLA52349227590_112022-O.webp" alt="Controle Playstation" />
                        </div>
                        <div className={styles.info}>
                            <h1>Controle joystick sem fio Sony PlayStation Dualshock 4 green...</h1>
                            <h1>R$ 178</h1>
                            <p>em 5x 35,60 sem juros</p>
                            <p>frete grátis</p>
                            <p>Quantidade</p>
                            <input type="number" name="" id="" />
                            <button>Adicionar ao carrinho</button>
                        </div>
                    </div>
                    <div className={styles.description}>
                        <h2>Descrição</h2>
                        <p>Controle preciso. Este controle combina funções revolucionárias, preservando precisão, conforto e exatidão em cada movimento. Graças à sua ergonomia especialmente projetada para a posição da sua mão, você pode passar horas jogando com total conforto.</p>
                    </div>
                </div>
            </div>
        )
    } else {
        return (null)
    }
}