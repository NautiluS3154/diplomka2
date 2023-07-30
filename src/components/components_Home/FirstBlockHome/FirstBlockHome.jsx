import React from 'react';
import styles from './FirstBlockHome.module.css'
import { HomeImg1 } from '../../../data';
export const FirstBlockHome = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapp}>
                <div className={styles.mini_container}>
                    <span className={styles.title}>3D game Dev </span>
                    <p className={styles.desc}>Work that we produce for our clients</p>
                    <p className={styles.about_desc}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
                    <button className={styles.main_btn}>Get more details</button>
                </div>
                <img src={HomeImg1} alt="" className={styles.main_img}/>
            </div>
        </div>
    );
}


