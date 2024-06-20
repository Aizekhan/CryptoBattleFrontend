import React from 'react';
import './TopBar.css';
import userIcon from '../assets/images/user-icon.png';
import binanceIcon from '../assets/images/binance-icon.png';
import walletIcon from '../assets/images/wallet-icon.png';
import levelIcon from '../assets/images/level.png'; 

const TopBar = ({ username, level }) => {
    return (
        <div className="top-bar">
            <div className="user-info">
                <img src={userIcon} alt="User" className="user-icon" />
                <span>{username}</span>
                <img src={levelIcon} alt="Level" className="level-icon" />
                <span>{level}</span>
            </div>
            <div className="icon-bar">
                <img src={binanceIcon} alt="Binance" className="binance-icon" />
                <img src={walletIcon} alt="Wallet" className="wallet-icon" />
            </div>
        </div>
    );
};

export default TopBar;
