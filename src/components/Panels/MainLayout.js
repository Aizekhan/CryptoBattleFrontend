import React from 'react';
import { Outlet } from 'react-router-dom';
import TopBar from './TopBar';
import SecondaryBar from './SecondaryBar';
import NavigationBar from './NavigationBar';
import './MainLayout.css';

const MainLayout = () => {
    return (
        <div className="main-layout">
            <TopBar />
            <SecondaryBar />
            <div className="content">
                <Outlet /> {/* Тут відображається вміст дочірніх маршрутів */}
            </div>
            <NavigationBar />
        </div>
    );
};

export default MainLayout;
