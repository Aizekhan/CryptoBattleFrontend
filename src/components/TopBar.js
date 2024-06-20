import React from 'react';
import './TopBar.css';
import userIcon from '../assets/images/user-icon.png';
import friendsIcon from '../assets/images/friends.png';
import binanceIcon from '../assets/images/binance-icon.png';
import walletIcon from '../assets/images/wallet-icon.png'; // Оновлений шлях до іконки

const TopBar = ({ username }) => {
    return (
        <div className="top-bar">
            <div className="user-info">
                <img src={userIcon} alt="User" className="user-icon" />
                <span>{username} (Trainer)</span>
            </div>
            <div className="friends-info">
                <img src={friendsIcon} alt="Friends" className="friends-icon" />
            </div>
            <div className="binance-info">
                <img src={binanceIcon} alt="Binance" className="binance-icon" />
                <img src={walletIcon} alt="Wallet" className="wallet-icon" />
            </div>
        </div>
    );
};

export default TopBar;