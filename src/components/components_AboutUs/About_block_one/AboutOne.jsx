import React from 'react';
import styles from '../About_block_one/AboutOne.module.css'
import { MainImg } from '../../../data';
export const AboutOne = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapp}>
                <div className={styles.mini_container}>
                    <span className={styles.title}>3D game Dev </span>
                    <p className={styles.desc}>Work that we produce for our clients</p>
                    <p className={styles.about_desc}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
                    <button className={styles.main_btn}>Get more details</button>
                </div>
                <img src={MainImg} alt="" className='main_img'/>
            </div>
        </div>
    );
}


