import React from 'react';
import Styles from './SERTwo.module.css'
import SERTwoIMAG from '..//..//../assets/AssetsServices/Video Image.png'
import ikon from '../../../assets/AssetsServices/Group 1120.svg'
const SERTwo = () => {
    return (
        <div className={Styles.container}>
           <div className={Styles.wrapp}>

            <div className={Styles.SERTwoIMAG}>
<img className={Styles.TwoIMAG} src={SERTwoIMAG} alt="" />
            </div>

            <div className={Styles.SERTwoText}>

    <h1>        Lorem Ipsum is simply dummy text. </h1>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy .
        
          <h5> <img src={ikon} alt="" />Lorem Ipsum is simply</h5>
          <h5> <img src={ikon} alt="" />  Lorem Ipsum is simply</h5>
          <h5> <img src={ikon} alt="" /> Lorem Ipsum is simply</h5>
          <h5> <img src={ikon} alt="" /> Lorem Ipsum is simply</h5>
            </div>



           </div>
        </div>
    );
}

export default SERTwo;
