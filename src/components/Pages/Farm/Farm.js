import React from 'react';
import { Outlet } from 'react-router-dom';
import SubNavigation from '../../Panels/SubNavigation';

const Farm = () => {
    const subPages = [
        { path: 'farm', name: 'Farm' },
        { path: 'lands', name: 'Lands' },
        { path: 'dung', name: 'Dung' },
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
