// src/components/TopBar.js
import React from 'react';
import './TopBar.css';
import userIcon from '../assets/images/user-icon.png';
import levelIcon from '../assets/images/level-icon.png';
import walletIcon from '../assets/images/wallet-icon.png';

const TopBar = ({ username, level, balance }) => {
    return (
        <div className="top-bar">
            <div className="user-info">
                <img src={userIcon} alt="User" className="user-icon" />
                <span>{username}</span>
            </div>
            <div className="user-level">
                <img src={levelIcon} alt="Level" className="level-icon" />
                <span>Level: {level}</span>
            </div>
            <div className="user-balance">
                <img src={walletIcon} alt="Wallet" className="wallet-icon" />
                <span>{balance} gold</span>
            </div>
        </div>
    );
};

export default TopBar;
