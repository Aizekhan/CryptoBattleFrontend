import React from 'react';
import { Outlet } from 'react-router-dom';
import SubNavigation from '../Panels/SubNavigation';

const Home = () => {
    const subPages = [
        { path: 'sub1', name: 'Hero' },
        { path: 'sub2', name: 'Equip' },
        { path: 'sub3', name: 'Stats' },
        { path: 'sub4', name: 'Story' },
    ];

    return (
        <div>
            <SubNavigation basePath="/home" subPages={subPages} />
            <Outlet />
        </div>
    );
};

export default Home;
