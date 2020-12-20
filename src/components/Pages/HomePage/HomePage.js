import React from 'react';

import Showcase from '../../HomePage/Showcase/Showcase';
import Divider from '../../Shared/Divider/Divider';
import HomeContent from '../../HomePage/HomeContent/HomeContent';
import HomeProcess from '../../HomePage/HomeProcess/HomeProcess';
import HomePackages from '../../HomePage/HomePackages/HomePackages';
import HomeTeam from '../../HomePage/HomeTeam/HomeTeam';

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