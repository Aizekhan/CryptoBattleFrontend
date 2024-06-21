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
                <div className="top-bar">
                    <TopBar />
                </div>
                <div className="secondary-bar">
                    <SecondaryBar />
                </div>
                <div className="content">
                    <Outlet />
                </div>
                <div className="navigation-bar">
                    <NavigationBar />
                </div>
            </div>
        </UserStatsProvider>
    );
}

export default MainLayout;
