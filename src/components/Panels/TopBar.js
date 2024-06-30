import React from 'react';
import userIcon from '../../assets/images/user-icon.png';
import walletIcon from '../../assets/images/wallet-icon.png';
import coinImage from '../../assets/images/coin.png';
import { useUserStats } from '../../context/UserStatsContext';
import './TopBar.css';

const TopBar = () => {
    const { userStats } = useUserStats();

    return (
        <div className="top-bar">
            <div className="user-info">
                <img src={userIcon} alt="User" />
                <span>{userStats.username}</span>
            </div>
            <div className="balance-info">
                <img src={coinImage} alt="Coin" className="coin-icon" />
                <span>{userStats.balance}</span>
            </div>
            <div className="wallet-info">
                <img src={walletIcon} alt="Wallet" />
            </div>
        </div>
    );
};

export default TopBar;
