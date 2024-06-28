import React from 'react';
import { Outlet } from 'react-router-dom';
import SubNavigation from '../../Panels/SubNavigation';

const Mines = () => {
    const subPages = [
        { path: 'sub1', name: 'Mines' },
        { path: 'sub2', name: 'Skills' },
    ];

    return (
        <div className="mines">
            <SubNavigation basePath="/mines" subPages={subPages} />
            <Outlet /> {/* Тут відображається вміст дочірніх маршрутів Mines */}
        </div>
    );
};

export default Mines;
