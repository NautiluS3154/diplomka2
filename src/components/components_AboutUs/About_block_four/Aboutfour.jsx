import React from 'react';
import styles from './Aboutfour.module.css';
import { ReactComponent as LogoOne } from '../../../assets/AssetsAboute/Bill 1.svg';
import { ReactComponent as LogoTwo } from '../../../assets/AssetsAboute/Bill 1.svg';
import { ReactComponent as LogoThree } from '../../../assets/AssetsAboute/Bill 1.svg';
import { ReactComponent as LogoFour } from '../../../assets/AssetsAboute/Bill 1.svg';

export const Aboutfour = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapp}>
                <div className={styles.fourtitle}>Our Team</div>
                <div className={styles.aboutFour_cart}>
                    <ul>
                        <li className={styles.li_four}>
                            <div className={styles.logoOne}><LogoOne/></div>
                            <h2> John peter </h2>
                            COO
                        </li>

                        <li className={styles.li_four}>
                            <div className={styles.logoTwo}><LogoTwo/></div>
                            <h2> John peter </h2>
                            COO
                        </li>

                        <li className={styles.li_four}>
                            <div className={styles.logoThree}><LogoThree/></div>
                            <h2> John peter </h2>
                            COO
                        </li>

                        <li className={styles.li_four}>
                            <div className={styles.logoFour}><LogoFour/></div>
                            <h2> John peter </h2>
                            COO
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
