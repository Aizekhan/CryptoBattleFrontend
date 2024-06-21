// src/components/Panels/MainLayout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import TopBar from './TopBar';
import NavigationBar from './NavigationBar';
import SecondaryBar from './SecondaryBar';
import { UserStatsProvider } from '../UserStatsContext';
import './MainLayout.css';

const MainLayout = () => {
    return (
        <UserStatsProvider>
            <div className="main-layout">
                <TopBar />
                <SecondaryBar />
                <div className="content">
                    <Outlet />
                </div>
                <NavigationBar />
            </div>
        </UserStatsProvider>
    );
}

export default MainLayout;
