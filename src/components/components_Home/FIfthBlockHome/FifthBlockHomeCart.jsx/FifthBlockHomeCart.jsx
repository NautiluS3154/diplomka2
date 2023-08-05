import React from 'react';
import styles from './FifthBlockHomeCart.module.css'
const FifthBlockHomeCart = (props) => {
    const {img}=props
    return (
        <div className=''>
            <div className={styles.wrapp}>
                <img src={img} alt="" className={styles.image} />
            </div>
        </div>
    );
}

export default FifthBlockHomeCart;
