import React from 'react';
import { Outlet } from 'react-router-dom';
import SubNavigation from '../../Panels/SubNavigation';

const Battle = () => {
    const subPages = [
        { path: 'sub1', name: 'Items' },
        { path: 'sub2', name: 'Inv' },
        { path: 'sub3', name: 'Rank' },
        { path: 'sub4', name: 'History' },
    ];

    return (
        <div>
            <SubNavigation basePath="/battle" subPages={subPages} />
            <Outlet />
        </div>
    );
};

export default Battle;
