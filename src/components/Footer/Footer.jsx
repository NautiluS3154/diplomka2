import React from 'react';
import styles from './Footer.module.css'
import FooterEmail from '../components_Footer/FooterEmail/FooterEmail';
import FooterBasement from '../components_Footer/FooterBasement/FooterBasement';
const Footer = () => {
    return (
        <div className=''>
            <div className="">
                <FooterEmail />
                <FooterBasement />
            </div>
        </div>
    );
}

export default Footer;
