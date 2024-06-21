import React, { useEffect, useState } from 'react';
import userIcon from '../../assets/images/user-icon.png';
import walletIcon from '../../assets/images/wallet-icon.png';
import coinImage from '../../assets/images/coin.png';
import { useUserStats } from '../UserStatsContext';
import './MainLayout.css'; // Оновлення стилів, щоб використовувати MainLayout.css

const TopBar = () => {
    const { userStats } = useUserStats();
    const [balance, setBalance] = useState(userStats.balance);

    useEffect(() => {
        const interval = setInterval(() => {
            setBalance(prevBalance => prevBalance + userStats.hourlyIncome / 3600);
        }, 1000);

        return () => clearInterval(interval);
    }, [userStats.hourlyIncome]);

    return (
        <div className="top-bar">
            <div className="user-info">
                <img src={userIcon} alt="User" />
                <span>{userStats.username}</span>
            </div>
            <div className="balance-info">
                <img src={coinImage} alt="Coin" className="coin-icon" />
                <span>{Math.floor(balance)}</span>
            </div>
            <div className="wallet-info">
                <img src={walletIcon} alt="Wallet" />
            </div>
        </div>
    );
};

export default TopBar;
