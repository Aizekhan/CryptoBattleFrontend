import React from 'react';
import { Outlet } from 'react-router-dom';
import SubNavigation from '../Panels/SubNavigation';

const Mines = () => {
    const subPages = [
        { path: 'sub1', name: 'Overview' },
        { path: 'sub2', name: 'Resources' },
        { path: 'sub3', name: 'Workers' },
        { path: 'sub4', name: 'Statistics' },
    ];

    return (
        <div>
            <SubNavigation basePath="/mines" subPages={subPages} />
            <Outlet />
        </div>
    );
};

export default Mines;
