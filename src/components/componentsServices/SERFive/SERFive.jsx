import React from 'react';
import Styles from  './SERFive.module.css'
import Fiveimg from '../../../assets/AssetsServices/Rectangle888.png'

const SERFive = () => {
    return (
        <div className={Styles.container}>
            <div className={Styles.wrapp}>

        <div className={Styles.FiveText}>
        <h1>Lorem Ipsum is simply dummy 
text dummy text </h1>
        <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
   It has survived not only five centuries,
</h4>
<h4> Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
</h4>
<button className={Styles.FiveBtn}>Read more</button>


         </div>

<div className={Styles.FiveIMG}>
    <img src={Fiveimg} alt="" />
</div>


            </div>
        </div>
    );
}

export default SERFive;
