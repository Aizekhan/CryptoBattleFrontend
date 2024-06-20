import React from 'react';
import './TopBar.css';
import userIcon from '../assets/images/user-icon.png';
import friendsIcon from '../assets/images/friends.png';
import binanceIcon from '../assets/images/binance-icon.png';
import walletIcon from '../assets/images/wallet-icon.png'; // Оновлений шлях до іконки

const TopBar = ({ username, tapIncome, level, hourlyIncome }) => {
    return (
        <div className="top-bar">
            <div className="user-info">
                <img src={userIcon} alt="User" className="user-icon" />
                <span>{username}</span>
            </div>
            <div className="friends-info">
                <img src={friendsIcon} alt="Friends" className="friends-icon" />
            </div>
            <div className="binance-info">
                <img src={binanceIcon} alt="Binance" className="binance-icon" />
                <img src={walletIcon} alt="Wallet" className="wallet-icon" />
            </div>
            <div className="stats-bar">
                <div className="stat">
                    <span>Дохід за тап</span>
                    <span className="value">{tapIncome}</span>
                </div>
                <div className="stat">
                    <span>Рівень акаунту</span>
                    <span className="value">{level}</span>
                </div>
                <div className="stat">
                    <span>Дохід в годину</span>
                    <span className="value">{hourlyIncome}</span>
                </div>
            </div>
        </div>
    );
};

export default TopBar;