import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import SubNavigation from '../../Panels/SubNavigation';

const Battle = () => {
    const subPages = [
        { path: 'sub1', name: 'PvP' },
        { path: 'sub2', name: 'Cards' },
        { path: 'sub3', name: 'Rank' },
    ];

    const location = useLocation();
    const isBattlePage = location.pathname.startsWith('/battle/battle-scene/pvp-battle');

    return (
        <div>
            <SubNavigation basePath="/battle" subPages={subPages} isBattlePage={isBattlePage} />
            <Outlet /> {/* Тут відображається вміст дочірніх маршрутів */}
        </div>
    );
};

export default Battle;
