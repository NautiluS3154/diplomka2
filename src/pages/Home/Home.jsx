import React from 'react';
import { FirstBlockHome } from '../../components/components_Home/FirstBlockHome/FirstBlockHome';
import { SecondBlockHome } from '../../components/components_Home/SecondBlockHome/SecondBlockHome'
import ThirdBlockHome from '../../components/components_Home/ThirdBlockHome/ThirdBlockHome';
import { FourthBlockHome } from '../../components/components_Home/FouthBlockHome/FourthBlockHome';
import FifthBlockHome from '../../components/components_Home/FIfthBlockHome/FifthBlockHome';

const Home = () => {
    return (
        <div>
            <FirstBlockHome />
            <SecondBlockHome />
            <ThirdBlockHome />
            <FourthBlockHome />
            <FifthBlockHome />
        </div>
    );
}

export default Home;
