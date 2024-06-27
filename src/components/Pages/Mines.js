import React from 'react';
import { Outlet } from 'react-router-dom';
import SubNavigation from '../Panels/SubNavigation';
import './Mines.css'; // Додамо стилі для Mines

const Mines = () => {
    const subPages = [
        { path: 'gold', name: 'Gold' },
        { path: 'res', name: 'Resources' },
        { path: 'skills', name: 'Skills' },
        { path: 'crystal', name: 'Crystals' },
    ];

    return (
        <div className="mines">
            <SubNavigation basePath="/mines" subPages={subPages} />
            <Outlet />
        </div>
    );
};

export default Mines;
