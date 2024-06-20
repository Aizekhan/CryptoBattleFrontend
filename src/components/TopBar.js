import React from 'react';
import './TopBar.css';
import userIcon from '../assets/images/user-icon.png';
import binanceIcon from '../assets/images/binance-icon.png';

const TopBar = ({ username, level, tapIncome, hourlyIncome, balance }) => {
    return (
        <div className="top-bar">
            <div className="user-info">
                <img src={userIcon} alt="User" className="user-icon" />
                <span>{username} (Trainer)</span>
            </div>
            <div className="stats">
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
            <div className="balance">
                <span className="balance-icon">💰</span>
                <span>{balance}</span>
            </div>
            <div className="binance-info">
                <img src={binanceIcon} alt="Binance" className="binance-icon" />
                <span>Binance</span>
            </div>
        </div>
    );
};

export default TopBar;