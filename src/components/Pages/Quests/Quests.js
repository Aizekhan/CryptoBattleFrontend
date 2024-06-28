import React from 'react';
import { Outlet } from 'react-router-dom';
import SubNavigation from '../../Panels/SubNavigation';

const Quests = () => {
    const subPages = [
        { path: 'sub1', name: 'Active' },
        { path: 'sub2', name: 'Daily' },
        { path: 'sub3', name: 'Profa' },
    ];

    return (
        <div>
            <SubNavigation basePath="/quests" subPages={subPages} />
            <Outlet />{/* Тут відображається вміст дочірніх маршрутів */}
        </div>
    );
};

export default Quests;
