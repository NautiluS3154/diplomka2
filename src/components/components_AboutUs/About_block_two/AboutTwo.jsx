import React from 'react';
import styles from '../About_block_two/AboutTwo.module.css';
import { MainImg } from '../../../data';

export const AboutTwo = () => {
  return (
    <div className={styles.container}>
           
      <div className={styles.wrapp}>
    <div className={styles.abtitle}>Why work with us</div>
        <div className={styles.aboutTwo_cart}>
          <ul> 
          <li className={styles.li_abone}>
            <button className={styles.btn_one}>Lorem ipsum</button>
            <h2> Lorem Ipsum </h2>
            Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem
            Ipsum has been the industry's standard
            dummy text ever since the 1500s.
          </li>
          <li className={styles.li_abone}>
        
            <button className={styles.btn_two}>Lorem ipsum</button>
            <h2> Lorem Ipsum</h2>
            Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem
            Ipsum has been the industry's standard
            dummy text ever since the 1500s.
          </li>
          <li className={styles.li_abone}>
            <button className={styles.btn_three}>Lorem ipsum</button>
            <h2> Lorem Ipsum </h2>
            Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem
            Ipsum has been the industry's sndard
            dummy text ever since the 1500s.
          </li>

          </ul>
        </div>
      </div>
    </div>
  );
};

