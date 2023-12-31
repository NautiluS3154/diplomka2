import React from 'react';
import styles from './Header.module.css'
import { HeaderLogo } from '../../data';
import { Link } from 'react-router-dom';
export const Header = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapp}>
                <Link to='/'>
                    <a href="" className={styles.link_logo}>
                        <img src={HeaderLogo} alt="" className={styles.header_logo} />
                    </a>
                </Link>
                <div className={styles.mini_container}>
                    <Link to='/home'><a href="" className={styles.header_link}>Home</a></Link>
                    <Link to='/about'><a href="" className={styles.header_link}>About us</a></Link>
                    <Link to='/services'><a href="" className={styles.header_link}>Portfolio</a></Link>
                    <Link to='/news'><a href="" className={styles.header_link}>News</a></Link>
                    <Link to='/contact'><button className={styles.header_btn}>Contact us</button></Link>
                </div>
            </div>
        </div>
    );
}


