import React from 'react';
import { Outlet } from 'react-router-dom';
import SubNavigation from '../Panels/SubNavigation';

const Farm = () => {
    const subPages = [
        { path: 'sub1', name: 'Farm' },
        { path: 'sub2', name: 'Lands' },
        { path: 'sub3', name: 'Dung' },
        { path: 'sub4', name: 'Skills' },
    ];

    return (
        <div>
            <SubNavigation basePath="/farm" subPages={subPages} />
            <Outlet />
        </div>
    );
};

export default Farm;
