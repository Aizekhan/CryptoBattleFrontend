import React from 'react';
import { Outlet } from 'react-router-dom';
import SubNavigation from '../../Panels/SubNavigation';

const Quests = () => {
    const subPages = [
        { path: 'sub1', name: 'Now' },
        { path: 'sub2', name: 'Done' },
        { path: 'sub3', name: 'Daily' },
        { path: 'sub4', name: 'Mision' },
    ];

    return (
        <div>
            <SubNavigation basePath="/quests" subPages={subPages} />
            <Outlet />
        </div>
    );
};

export default Quests;
