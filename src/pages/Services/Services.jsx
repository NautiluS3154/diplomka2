import React from 'react';
import SEROne from '../../components/componentsServices/SEROne/SEROne';
import SERTwo from '../../components/componentsServices/SERTwo/SERTwo';
import SERThree from '../../components/componentsServices/SERThree/SERThree'
import { SERFour } from '../../components/componentsServices/SERFour/SERFour';
import SERFive from '../../components/componentsServices/SERFive/SERFive';
import SERSix from '../../components/componentsServices/SERSix/SERSix';
import SERSeven from '../../components/componentsServices/SERSeven/SERSeven';

const Services = () => {
    return (
        <div className=''>
            <div className="">
                <SEROne />
                <SERTwo />
                <SERThree />
                <SERFour />
                <SERFive />
                <SERSix />
                <SERSeven />
            </div>
        </div>
    );
}

export default Services;
