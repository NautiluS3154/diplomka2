import React from 'react';
import Styles from '../SERThree/SERThree.module.css'
import Threeimg from '../../..//assets/AssetsServices/Rectangle 25 (1).png'
const SERThree = () => {
    return (
        <div className={Styles.container}>
            <div className={Styles.wrapp}>

<div className={Styles.threeText }>
<h1>Lorem Ipsum is simply dummy 
text dummy text </h1>
<h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
   It has survived not only five centuries,
</h4>

<h4> Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
</h4>
  
<button className={Styles.ThreBtn}> Read more</button>


</div>

<div className={Styles.ThreImag}>
    <img src={Threeimg} alt="" />
</div>
                
            </div>
        </div>
    );
}

export default SERThree;
