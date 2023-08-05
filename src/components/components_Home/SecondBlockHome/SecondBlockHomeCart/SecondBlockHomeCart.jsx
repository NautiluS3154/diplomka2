import React, { useState } from 'react';
import styles from './SeconBlockHomeCart.module.css'

export const SecondBlockHomeCart = (props) => {
  const { image, desc, modalDesc, aboutModal } = props;
  const [modalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <div>
      <div onClick={handleOpenModal}>
        <img src={image} alt="" className={styles.HomeCartImage} />
        <p className={styles.desc}>{desc} Followers</p>
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
};
