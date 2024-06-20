import React from 'react';
import './TopBar.css';
import userIcon from '../assets/images/user-icon.png';
import binanceIcon from '../assets/images/binance-icon.png';
import walletIcon from '../assets/images/wallet-icon.png';
import friendsIcon from '../assets/images/friends.png'; // Іконка для Friends

const TopBar = ({ username, level, tapIncome, hourlyIncome }) => {
    return (
        <div className="top-bar">
            <div className="top-row">
                <div className="user-info">
                    <img src={userIcon} alt="User" className="user-icon" />
                    <span className="username">{username}</span>
                    <span className="level">Рівень: {level}</span> {/* Додавання рівня користувача */}
                </div>
                <div className="icon-bar">
                    <img src={friendsIcon} alt="Friends" className="friends-icon" /> {/* Додавання кнопки Friends */}
                    <img src={binanceIcon} alt="Binance" className="binance-icon" />
                    <img src={walletIcon} alt="Wallet" className="wallet-icon" />
                </div>
            </div>
            <div className="stats-bar">
                <div className="stat">
                    <span>Дохід за тап</span>
                    <span className="value">{tapIncome}</span>
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