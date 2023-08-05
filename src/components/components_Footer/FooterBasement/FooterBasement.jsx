import React from 'react';
import styles from './FooterBasement.module.css'
import { FooterImg1, FooterImg2, FooterImg3, FooterImg4, HeaderLogo } from '../../../data'
const FooterBasement = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapp}>
                <div className={styles.mini_container}>
                    <div className={styles.litle_container}>
                        <a href="" className=""><img src={HeaderLogo} alt="" className="" /></a>
                        <p className={styles.p_desc}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        <p className={styles.p_desc}>@Logo</p>
                    </div>
                    <div className={styles.litle_container}>
                        <a href="" className={styles.title}>About us</a>
                        <a href="" className={styles.desc}>Zeux</a>
                        <a href="" className={styles.desc}>Portfolio</a>
                        <a href="" className={styles.desc}>Careers</a>
                        <a href="" className={styles.desc}>Contact us</a>
                    </div>
                    <div className={styles.litle_container}>
                        <a href="" className={styles.title}>Contact us</a>
                        <p className={styles.p_desc}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        <p className={styles.p_desc}>+908 89097 890</p>
                    </div>
                    <div className={styles.side_links}>
                        <a href="" className=""><img src={FooterImg1} alt="" className={styles.image} /></a>
                        <a href="" className=""><img src={FooterImg2} alt="" className={styles.image} /></a>
                        <a href="" className=""><img src={FooterImg3} alt="" className={styles.image} /></a>
                        <a href="" className=""><img src={FooterImg4} alt="" className={styles.image} /></a>
                    </div>
                </div>
                <span className={styles.stick}></span>
                <p className={styles.side_desc}>Copyright ® 2021 Lorem All rights Rcerved</p>
            </div>
        </div>
    );
}

export default FooterBasement;
