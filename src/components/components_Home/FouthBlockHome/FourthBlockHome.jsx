import React from 'react';
import styles from './FourthBlockHome.module.css'
import { DevelopmentData } from '../../../PropsData';
import FourthBlockHomeCart from './FourthBlockHomeCart/FourthBlockHomeCart';
export const FourthBlockHome = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapp}>
                <h1 className={styles.title}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>
                <p className={styles.desc}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                <div className={styles.cart_container}>
                    {DevelopmentData.map(product => (
                            <FourthBlockHomeCart 
                            key={product.id}
                            img={product.img}
                            desc={product.desc}
                            />
                        ))}
                </div>
            </div>
        </div>
    );
}


