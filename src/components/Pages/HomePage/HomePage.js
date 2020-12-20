import React from 'react';

import Showcase from '../../Showcase/Showcase';
import Divider from '../../Divider/Divider';
import HomeContent from '../../HomeContent/HomeContent';
import HomeProcess from '../../HomeProcess/HomeProcess';
import HomePackages from '../../HomePackages/HomePackages';
import HomeTeam from '../../HomeTeam/HomeTeam';

const HomePage = () => {
    return (
        <div>
            <Showcase />
            <Divider heading="WHO ARE WE?" subheading="Car wash & detailing services" />
            <HomeContent />
            <HomeProcess />
            <HomePackages />
            <HomeTeam />
        </div>
    );
};
  
export default HomePage;