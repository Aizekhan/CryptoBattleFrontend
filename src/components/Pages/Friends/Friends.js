import React from 'react';
import { Outlet } from 'react-router-dom';
import SubNavigation from '../../Panels/SubNavigation';

const Friends = () => {
    const subPages = [
        { path: 'sub1', name: 'All' },
        { path: 'sub2', name: 'PvP' },
        { path: 'sub3', name: 'Enemy' }, 
        { path: 'sub4', name: 'Aliance' },
    ];

    return (
        <div>
            <SubNavigation basePath="/friends" subPages={subPages} />
            <Outlet />
        </div>
    );
};

export default Friends;
