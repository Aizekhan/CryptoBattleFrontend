import React from 'react';
import { Outlet } from 'react-router-dom';
import SubNavigation from '../../Panels/SubNavigation';

const Farm = () => {
    const subPages = [
        { path: 'sub1', name: "Hunt' },
        { path: 'sub2', name: 'Locations' },
       
        { path: 'skills', name: 'Skills' },
    ];

    return (
        <div>
            <SubNavigation basePath="/farm" subPages={subPages} />
            <Outlet />
        </div>
    );
};

export default Farm;
