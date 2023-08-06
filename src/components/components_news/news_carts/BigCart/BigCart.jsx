import React from 'react';
import styles from './BigCart.module.css'
const BigCart = (props) => {
const {image,btn,btn_title,title,desc} = props
    return (
        <div className={styles.container}>
            <div className={styles.wrapp}>
                <img src={image} alt="" className=''/>
                <div className={styles.btn_block}>
                    <button className={styles.btn}>{btn}</button>
                    <span className={styles.btn_title}>{btn_title}</span>
                </div>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.desc}>{desc}</p>
                <span className={styles.stick}></span>
            </div>
        </div>
    );
}

export default BigCart;
