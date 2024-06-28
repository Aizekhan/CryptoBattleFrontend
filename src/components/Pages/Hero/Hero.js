import React from 'react';
import { Outlet } from 'react-router-dom';
import SubNavigation from '../../Panels/SubNavigation';

const Home = () => {
    const subPages = [
        { path: 'sub1', name: 'Char' },
      
        { path: 'sub3', name: 'Passive' },
        { path: 'sub4', name: 'Equip' },
    ];

    return (
        <div>
            <SubNavigation basePath="/hero" subPages={subPages} />
            <Outlet />
        </div>
    );
};

export default Hero;
