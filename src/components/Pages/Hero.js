import React from 'react';
import { Outlet } from 'react-router-dom';
import SubNavigation from '../Panels/SubNavigation';

const Hero = () => {
    const subPages = [
        { path: 'stats', name: 'Stats' },
        { path: 'skills', name: 'Skills' },
        { path: 'equip', name: 'Equip' },
        { path: 'story', name: 'Story' },
    ];

    return (
        <div>
            <SubNavigation basePath="/hero" subPages={subPages} />
            <Outlet />
        </div>
    );
};

export default Hero;
