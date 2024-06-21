// src/components/UserStats.js
import React from 'react';
import './UserStats.css';
import levelIcon from '../assets/images/level-icon.png';
import walletIcon from '../assets/images/wallet-icon.png';

const UserStats = ({ level, balance, hourlyIncome }) => {
    return (
        <div className="user-stats">
            <div className="stat-item">
                <img src={levelIcon} alt="Level" />
                <span>Level: {level}</span>
            </div>
            <div className="stat-item">
                <img src={walletIcon} alt="Balance" />
                <span>{balance} gold</span>
            </div>
            <div className="stat-item">
                <span>Income: {hourlyIncome} gold/hour</span>
            </div>
        </div>
    );
};

export default UserStats;
