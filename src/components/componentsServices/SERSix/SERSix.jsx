import React from 'react';
import Styles from './SERSix.module.css'
import SIXimg from '../../../assets/AssetsServices/Ellipse 175.svg'
import SIXIMG from  '../../../assets/AssetsServices/Ellipse 1751.svg'
import SIXIMAGE from '../../../assets/AssetsServices/Ellipse 1752.svg'
import iconImage from '../../../assets/AssetsServices/Group 1161.svg'
const SERSix = () => {
    return (
        <div className={Styles.container}>
            <div className={Styles.wrapp}>

<div className={Styles.SixText}>
    <h1>Trusted by Thousands of Happy Customer</h1>
  <h5> Ipsum is simply dummy text of the printing and 
   typesetting industry.Lorem Ipsum is simply dummy .</h5> 
   
</div>

<div className={Styles.SixCard}>

<ul>
    <li>
        <div className={Styles.IMGROBERT}>
<img className={Styles.Sixcardimg} src={SIXimg} alt="" />
Robert Warsaw,
<span className={Styles.SPANWa}> 4.5 <  img className={Styles.SPANWar} src={iconImage} alt="" /></span>
</div>
<h5>
Lorem Ipsum is simply dummy text 
of the printing and typesetting 
industry. Lorem Ipsum has been
 the industry's standard dummy
  text ever since the 1500s,
</h5>

    </li>
    <li>     <div className={Styles.IMGROBERT}>
<img className={Styles.Sixcardimg} src={SIXIMAGE} alt="" />
Kim Young Jou
<span className={Styles.SPANWa}> 4.5 <  img className={Styles.SPANWar} src={iconImage} alt="" /></span>
</div>
<h5>
Lorem Ipsum is simply dummy text 
of the printing and typesetting 
industry. Lorem Ipsum has been
 the industry's standard dummy
  text ever since the 1500s,
</h5>
</li>
    <li>     <div className={Styles.IMGROBERT}>
<img className={Styles.Sixcardimg} src={SIXIMG} alt="" />
Yessica Christy
<span className={Styles.SPANWa}> 4.5 <  img className={Styles.SPANWar} src={iconImage} alt="" /></span>
</div>
<h5>
Lorem Ipsum is simply dummy text 
of the printing and typesetting 
industry. 
</h5>
</li>
</ul>

</div>

            </div>
        </div>
    );
}

export default SERSix;
