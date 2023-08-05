import React from 'react';
import Styles from './SERSeven.module.css'
const SERSeven = () => {
    return (
        <div className={Styles.container}>
            <div className={Styles.wrapp}>
                
                <div className={Styles.SevenText}>
                <h1>Lorem Ipsum</h1>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                </div>
                
                <div className={Styles.SevenServis}>
<div className={Styles.SevenServisText}>            <h2>Stay in the loop</h2>
<h4>Subscribe to receive the latest news and updates about TDA.
We promise not to spam you! </h4> </div>

 
<div class={Styles.d1}>

<form>
  
    <input type="text" placeholder='Enter email address' />
  <button type="submit">Search</button>
</form>


</div>
                </div>
                
                
                
                 </div>
        </div>
    );
}

export default SERSeven;
