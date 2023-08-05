import React, { useState } from 'react';
import styles from './FifthBlockHome.module.css'
import { OurProjectData } from '../../../PropsData';
import FifthBlockHomeCart from './FifthBlockHomeCart.jsx/FifthBlockHomeCart';

const FifthBlockHome = () => {
    const [divClass, setDivClass] = useState(styles.none);

    const handleButtonClick = () => {
      setDivClass(divClass === styles.none ? styles.hide_wrapp : styles.none);
    };
    return (
        <div className={styles.container}>
            <div className={styles.wrapp}>
                <h1 className={styles.title}>Our Recent Projects</h1>
                <p className={styles.desc}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                <div className={styles.cart_container}>
                    {OurProjectData.map(product => (
                                <FifthBlockHomeCart
                                key={product.id}
                                img={product.img}
                                />
                            ))}
                </div>
                <button className={styles.home_btn} onClick={handleButtonClick}>SEE ALL</button>
            </div>
            <div className={divClass}>
                <div className={styles.MoreProject}>
                        {OurProjectData.map(product => (
                            <FifthBlockHomeCart
                            key={product.id}
                            img={product.img}
                            />
                        ))}
                </div>
            </div>
        </div>
    );
}

export default FifthBlockHome;
