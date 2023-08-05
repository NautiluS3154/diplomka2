import React from 'react';
import styles from './FourthBlockHomeCart.module.css'

const FourthBlockHomeCart = (props) => {
    const {img, desc} = props
    return (
        <div className=''>
            <div className={styles.wrapp}>
                <img src={img} alt="" className="" />
                <p className={styles.desc}>{desc}</p>
                <a href="" className={styles.arrow}></a>
            </div>
        </div>
    );
}

export default FourthBlockHomeCart;
