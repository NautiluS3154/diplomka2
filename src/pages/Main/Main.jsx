import React from 'react';
import styles from './Main.module.css'
import { MainImg } from '../../data';
export const Main = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapp}>
                <div className="mini_container">
                    <span className="title">3D game Dev </span>
                    <p className="desc">Work that we produce for our clients</p>
                    <p className="about_desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
                    <button className="main_btn">Get more details</button>
                </div>
                <img src={MainImg} alt="" className='main_img'/>
            </div>
        </div>
    );
}


