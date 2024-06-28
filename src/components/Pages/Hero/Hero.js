import React from 'react';
import { Outlet } from 'react-router-dom';
import SubNavigation from '../../Panels/SubNavigation';

const Hero = () => {
    const subPages = [
        { path: 'sub1', name: 'Char' },
        { path: 'sub2', name: 'Passive' },
        { path: 'sub3', name: 'Equip' },
    ];

    return (
        <div>
            <SubNavigation basePath="/hero" subPages={subPages} />
            <Outlet />{/* Тут відображається вміст дочірніх маршрутів */}
        </div>
    );
};

export default Hero;
