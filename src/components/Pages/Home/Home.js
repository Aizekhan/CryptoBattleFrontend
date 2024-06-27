import React from 'react';
import { Outlet } from 'react-router-dom';
import SubNavigation from '../../Panels/SubNavigation';

const Home = () => {
    const subPages = [
        { path: 'hero', name: 'Hero' },
        { path: 'equip', name: 'Equip' },
        { path: 'stats', name: 'Stats' },
        { path: 'story', name: 'Story' },

        { path: 'story', name: 'Achives' },
    ];

    return (
        <div>
            <SubNavigation basePath="/home" subPages={subPages} />
            <Outlet />
        </div>
    );
};

export default Home;
