// src/components/TopBar.js
import React from 'react';
import './TopBar.css';
import UserStats from './UserStats'; // Імпортуємо UserStats
import userIcon from '../assets/images/user-icon.png';

const TopBar = ({ username, level, balance, hourlyIncome }) => {
    return (
        <div className="top-bar">
            <div className="user-info">
                <img src={userIcon} alt="User" />
                <span>{username}</span>
            </div>
            <UserStats level={level} balance={balance} hourlyIncome={hourlyIncome} /> {/* Використовуємо UserStats */}
        </div>
    );
};

export default TopBar;
