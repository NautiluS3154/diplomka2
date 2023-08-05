import React from 'react';
import Styles from '../SEROne/SEROne.module.css'
import image from '../../../assets/AssetsServices/Group 1218.png'
const SEROne = () => {
    return (
        <div className={Styles.container}>
            <div className={Styles.wrapp}>
          <div className={Styles.SEROneText}>
          <h3>Home  <span>Services</span></h3> 
<h1>Lorem Ipsum is simply dummy text of the printing and. </h1>
Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          </div>
          <div className={Styles.SEROneImage}>
          <img src={image} alt="Пример изображения" />
          </div>
            </div>
        </div>
    );
}

export default SEROne;
