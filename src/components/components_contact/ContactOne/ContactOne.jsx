import React from 'react';
import Styles from './contactOne.module.css'
import image from '../../../assets/AssetsContact/Huge Global.png'
import imgfac from '../../../assets/AssetsContact/Group 5.svg'
import imgins from '../../../assets/AssetsContact/Group 11.svg'
import imgtwi from '../../../assets/AssetsContact/Group 10.svg'
import imgico from '../../../assets/AssetsContact/Group 9.svg'
import ImgNum from '../../../assets/AssetsContact/phone 1.svg'
import ImgGps from '../../../assets/AssetsContact/gps 1.svg'
const ContactOne = () => {
    return (
        <div className={Styles.container}>
            <div className={Styles.wrapp}>
          <div className={Styles.CONOneText}>
          <h3>Home  <span>Services</span></h3> 
<h1>Lorem Ipsum is simply dummy text of the printing and. </h1>
Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          </div>
          <div className={Styles.CONOneImage}>
          <img src={image} alt="Пример изображения" />
          </div>

<div className={Styles.CONOneFooter}>

<div className={Styles.Conicon}>

<div className={Styles.di1}>
    <h4>Follow us</h4>
<img src={imgfac} alt="" />
<img src={imgins} alt="" />
<img src={imgtwi} alt="" />
<img className={Styles.imgICO} src={imgico} alt="" />
 </div>


<section className={Styles.di2}>
    <img className={Styles.NUMico} src={ImgNum} alt="" /> 
    +94 4444 5555 6 
</section>

<section className={Styles.di3}>
    <img className={Styles.NUMGPS} src={ImgGps} alt="" /> 
    but also the leap into electronic 
typesetting
</section>


</div>


</div>


            </div>
        </div>
    );
}

export default ContactOne;
