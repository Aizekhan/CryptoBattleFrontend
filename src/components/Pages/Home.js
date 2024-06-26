import React from 'react';
import { Outlet } from 'react-router-dom';
import SubNavigation from '../Panels/SubNavigation';

const Home = () => {
    const subPages = [
        { path: 'sub1', name: 'Hero' },
        { path: 'sub2', name: 'News' },
        { path: 'sub3', name: 'NFT' },
        { path: 'sub4', name: 'Contact' },
    ];

    return (
        <div>
            <SubNavigation basePath="/home" subPages={subPages} />
            <Outlet />
        </div>
    );
};

export default Home;
