import React from 'react';
import styles from './ThirdBlockHome.module.css'
import { WpHome } from '../../../data';
const ThirdBlockHome = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapp}>
                <p className={styles.first_title}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <div className={styles.mini_container}>
                    <p className={styles.title}>Lorem Ipsum</p>
                    <span className={styles.desc}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</span>
                </div>
                <img src={WpHome} alt="" className={styles.image} />
            </div>
        </div>
    );
}

export default ThirdBlockHome;
