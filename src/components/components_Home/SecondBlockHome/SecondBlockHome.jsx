import React, { useState } from 'react';
import styles from './SecondBlockHome.module.css'
import { SecondBlockHomeCart } from './SecondBlockHomeCart/SecondBlockHomeCart';
import { HomeCartProduct, MoreHomeCartProduct } from '../../../PropsData';


export const SecondBlockHome = () => {

    const [divClass, setDivClass] = useState(styles.none);

    const handleButtonClick = () => {
      setDivClass(divClass === styles.none ? styles.hide_wrapp : styles.none);
    };


    return (
        <div className={styles.container}>
            <div className={styles.wrapp}>
                <div className={styles.container_title}>
                    <p className={styles.desc}>Currently Trending Games</p>
                    <button className={styles.Home_btn}  onClick={handleButtonClick}>See All</button>
                </div>
                <div className={styles.container_cart}>
                    {HomeCartProduct.map(product => (
                        <SecondBlockHomeCart 
                        key={product.id}
                        image={product.img}
                        desc={product.desc}
                        modalDesc={product.modalDesc}
                        aboutModal={product.aboutModal}
                        />
                    ))}
                </div>

            </div>
            <div className={divClass}>
                <div className={styles.MoreGames}>
                        {MoreHomeCartProduct.map(product => (
                            <SecondBlockHomeCart 
                            key={product.id}
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
}


