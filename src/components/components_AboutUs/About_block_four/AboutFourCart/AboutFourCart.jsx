import React, { useState } from 'react';
import styles from './AboutFourCart.module.css'

const AboutFourCart = (props) => {
        const { image, title, desc, modalDesc, aboutModal } = props;
        const [modalVisible, setModalVisible] = useState(false);
      
        const handleOpenModal = () => {
          setModalVisible(true);
        };
      
        const handleCloseModal = () => {
          setModalVisible(false);
        };
      
    return (
        <div>
        <div className={styles.wrapp} onClick={handleOpenModal}>
          <img src={image} alt="" className={styles.HomeCartImage} />
          <p className={styles.title}>{title}</p>
          <p className={styles.desc}>{desc}</p>
          
        </div>
  
        {modalVisible && (
          <div className={styles.modal}>
            <div className={styles.modal_content}>
              <div className={styles.modal_container}>
                <p className={styles.modal_title}>{modalDesc}</p>
                <span className={styles.close} onClick={handleCloseModal}>
                  &times;
                </span>
              </div>
              <p className={styles.modal_desc}>{aboutModal}</p>
            </div>
          </div>
        )}
      </div>
    );
}

export default AboutFourCart;
