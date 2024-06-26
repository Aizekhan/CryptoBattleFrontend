import React from 'react';
import { Outlet } from 'react-router-dom';
import SubNavigation from '../Panels/SubNavigation';

const Farm = () => {
    const subPages = [
        { path: 'sub1', name: 'Overview' },
        { path: 'sub2', name: 'Crops' },
        { path: 'sub3', name: 'Animals' },
        { path: 'sub4', name: 'Market' },
    ];

    return (
        <div>
            <SubNavigation basePath="/farm" subPages={subPages} />
            <Outlet />
        </div>
    );
};

export default Farm;
