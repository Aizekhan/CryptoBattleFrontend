import React from 'react';
import { Outlet } from 'react-router-dom';
import SubNavigation from '../Panels/SubNavigation';

const Battle = () => {
    const subPages = [
        { path: 'sub1', name: 'Current Battles' },
        { path: 'sub2', name: 'History' },
        { path: 'sub3', name: 'Rankings' },
        { path: 'sub4', name: 'Rewards' },
    ];

    return (
        <div>
            <SubNavigation basePath="/battle" subPages={subPages} />
            <Outlet />
        </div>
    );
};

export default Battle;
