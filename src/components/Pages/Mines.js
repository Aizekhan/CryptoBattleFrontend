import React from 'react';
import { Outlet } from 'react-router-dom';
import SubNavigation from '../Panels/SubNavigation';

const Mines = () => {
    const subPages = [
        { path: 'gold', name: 'Gold' },
        { path: 'res', name: 'Res' },
        { path: 'skills', name: 'Skills' },
        { path: 'crystal', name: 'Crystal' },
    ];

    return (
        <div>
            <SubNavigation basePath="/mines" subPages={subPages} />
            <Outlet />
        </div>
    );
};

export default Mines;
