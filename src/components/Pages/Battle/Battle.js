import React from 'react';
import { Outlet } from 'react-router-dom';
import SubNavigation from '../../Panels/SubNavigation';

const Battle = () => {
    const subPages = [
        { path: 'sub1', name: 'PvP' },
        { path: 'sub2', name: 'Cards' },
         { path: 'sub3', name: 'Rank' },
    
    ];

    return (
        <div>
            <SubNavigation basePath="/battle" subPages={subPages} />
            <Outlet />{/* Тут відображається вміст дочірніх маршрутів */}
        </div>
    );
};

export default Battle;
