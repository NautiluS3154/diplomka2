import React from 'react';
import { AboutOne } from '../../components/components_AboutUs/About_block_one/AboutOne';
import { AboutTwo } from '../../components/components_AboutUs/About_block_two/AboutTwo';
import { AboutThree } from '../../components/components_AboutUs/About_block_three/AboutThree';
import { Aboutfour } from '../../components/components_AboutUs/About_block_four/Aboutfour';
export const AboutUs = () => {
    return (
        <div className='conteiner'>
            <AboutOne/>
            <AboutTwo/>
            <AboutThree/>
            <Aboutfour/>

        </div>
    );
}
