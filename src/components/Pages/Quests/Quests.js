import React from 'react';
import { Outlet } from 'react-router-dom';
import SubNavigation from '../../Panels/SubNavigation';

const Quests = () => {
    const subPages = [
        { path: 'sub1', name: 'Active' },
        { path: 'sub3', name: 'Daily' },
        { path: 'sub4', name: 'Profa' },
    ];

    return (
        <div>
            <SubNavigation basePath="/quests" subPages={subPages} />
            <Outlet />
        </div>
    );
};

export default Quests;
