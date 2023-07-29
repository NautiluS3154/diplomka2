import React from 'react';
import styles from './Header.module.css'
import { HeaderLogo } from '../../data';
export const Header = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapp}>
                <a href="" className={styles.link_logo}>
                    <img src={HeaderLogo} alt="" className={styles.header_logo} />
                </a>
                <div className={styles.mini_container}>
                    <a href="" className={styles.header_link}>Home</a>
                    <a href="" className={styles.header_link}>About us</a>
                    <a href="" className={styles.header_link}>Portfolio</a>
                    <a href="" className={styles.header_link}>News</a>
                    <button className={styles.header_btn}>Contact us</button>
                </div>
            </div>
        </div>
    );
}


