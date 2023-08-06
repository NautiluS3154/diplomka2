import React from 'react';
import styles from './Aboutfour.module.css';
import { AboutCartProduct } from '../../../PropsData';
import AboutFourCart from './AboutFourCart/AboutFourCart';

export const Aboutfour = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapp}>
                <div className={styles.fourtitle}>Our Team</div>
                <div className={styles.cart_container}>
                    {AboutCartProduct.map(product => (
                            <AboutFourCart
                            key={product.id}
                            title={product.title}
                            image={product.img}
                            desc={product.desc}
                            modalDesc={product.modalDesc}
                            aboutModal={product.aboutModal}
                            />
                        ))}
                </div>
            </div>
        </div>
    );
};
