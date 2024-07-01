import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import TopBar from './TopBar';
import SecondaryBar from './SecondaryBar';
import NavigationBar from './NavigationBar';
import './MainLayout.css';

const MainLayout = () => {
    const location = useLocation();
    const isBattlePage = location.pathname.startsWith('/battle/pvp-battle');

    return (
        <div className="main-layout">
            <TopBar isBattlePage={isBattlePage} />
            {!isBattlePage && <SecondaryBar />}
            <div className={`content ${isBattlePage ? 'battle-content' : ''}`}>
                {!isBattlePage && <SubNavigation />} {/* Додано SubNavigation */}
                <Outlet /> {/* Тут відображається вміст дочірніх маршрутів */}
            </div>
            <NavigationBar isBattlePage={isBattlePage} />
        </div>
    );
};

export default MainLayout;
