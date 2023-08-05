import React from 'react';
import Styles from './ContactTwo.module.css'
const ContactTwo = () => {
    return (
        <div className={Styles.container}>
            <div className={Styles.wrapp}>

<div className={Styles.regText}>
 <h2>Say hello</h2>
Lorem Ipsum is simply dummy text of the printing .
</div>


<div className={Styles.RegTWO}>

<input className={Styles.REGNA} name="name" placeholder='First Name' />
<input className={Styles.REGname2} name="name" placeholder='Last Name' />
<br />
<input className={Styles.REGemail} email="email" placeholder='Email Address' />
<br />
<input className={Styles.REGMAS} message="message" placeholder='Message'/>
<br />
<button className={Styles.RegBtn}>Get in touch</button>
</div>

            </div>
        </div>
    );
}

export default ContactTwo;
