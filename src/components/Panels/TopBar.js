// src/components/Panels/TopBar.js
import React from 'react';
import userIcon from '../../assets/images/user-icon.png';
import levelIcon from '../../assets/images/level-icon.png';
import walletIcon from '../../assets/images/wallet-icon.png';
import { useUserStats } from '../UserStatsContext';
import './TopBar.css';

const TopBar = () => {
    const { userStats } = useUserStats();

    return (
        <div className="top-bar">
            <div className="user-info">
                <img src={userIcon} alt="User" />
                <span>{userStats.username}</span>
            </div>
            <div className="level-info">
                <img src={levelIcon} alt="Level" />
                <span>Level: {userStats.level}</span>
            </div>
            <div className="balance-info">
                <img src={walletIcon} alt="Wallet" />
                <span>{userStats.balance} gold</span>
            </div>
        </div>
    );
};

export default TopBar;
