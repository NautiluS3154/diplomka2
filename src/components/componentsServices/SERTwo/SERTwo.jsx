import React from 'react';
import Styles from './SERTwo.module.css'
import SERTwoIMAG from '../../../assets/AssetsServices/Video Image.png'
import ikon from '../../../assets/AssetsServices/Group 1120.svg'
const SERTwo = () => {
    return (
        <div className={Styles.container}>
           <div className={Styles.wrapp}>

            <div className={Styles.SERTwoIMAG}>
<video className={Styles.videoTWO} controls >
  <source src={SERTwoIMAG} type="video/mp4" />
</video>

            </div>

            <div className={Styles.SERTwoText}>

    <h1>        Lorem Ipsum is simply dummy text. </h1>
       <h2> Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy . </h2>    
        

  
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
