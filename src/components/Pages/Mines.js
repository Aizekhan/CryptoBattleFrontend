import React from 'react';
import { Outlet } from 'react-router-dom';
import SubNavigation from '../Panels/SubNavigation';

const Mines = () => {
    const subPages = [
        { path: 'sub1', name: 'Gold' },
        { path: 'sub2', name: 'Res' },
        { path: 'sub3', name: 'Skills' },
        { path: 'sub4', name: 'Crystal' },
    ];

    return (
        <div>
            <SubNavigation basePath="/mines" subPages={subPages} />
            <Outlet />
        </div>
    );
};

export default Mines;
