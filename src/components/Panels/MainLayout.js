import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import TopBar from './TopBar';
import SecondaryBar from './SecondaryBar';
import NavigationBar from './NavigationBar';
import BattleHeader from '../Pages/Battle/BattleHeader'; // Імпорт нового компонента
import './MainLayout.css';

const MainLayout = () => {
    const location = useLocation();
    const isBattlePage = location.pathname.startsWith('/battle/pvp-battle');

    return (
        <div className="main-layout">
            <TopBar />
            {isBattlePage ? <BattleHeader /> : <SecondaryBar />}
            <div className={`content ${isBattlePage ? 'battle-content' : ''}`}>
                <Outlet /> {/* Тут відображається вміст дочірніх маршрутів */}
            </div>
            <NavigationBar />
        </div>
    );
};

export default MainLayout;
