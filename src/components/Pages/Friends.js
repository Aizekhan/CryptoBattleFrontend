import React from 'react';
import { Outlet } from 'react-router-dom';
import SubNavigation from '../Panels/SubNavigation';

const Friends = () => {
    const subPages = [
        { path: 'sub1', name: 'All Friends' },
        { path: 'sub2', name: 'Requests' },
        { path: 'sub3', name: 'Blocked' },
        { path: 'sub4', name: 'Suggestions' },
    ];

    return (
        <div>
            <SubNavigation basePath="/friends" subPages={subPages} />
            <Outlet />
        </div>
    );
};

export default Friends;
