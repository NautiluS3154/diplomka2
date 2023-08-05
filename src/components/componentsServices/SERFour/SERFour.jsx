import React from 'react';
import Styles from '../SERFour/SERFour.module.css'
import FourImg from '../../../assets/AssetsServices/Rectangle4554.png'

export const SERFour = () => {
    return (
        <div className={Styles.container}>
            <div className={Styles.wrapp}>
                
            <div className={Styles.FourImag}>
    <img src={FourImg} alt="" />
            </div>


<div className={Styles.FourText }>
<h1>Lorem Ipsum is simply dummy 
text dummy text </h1>
<h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
   It has survived not only five centuries,
</h4>

<h4> Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
</h4>
  
<button className={Styles.FourBtn}> Read more</button>


</div>
            </div>
        </div>
    );
}


