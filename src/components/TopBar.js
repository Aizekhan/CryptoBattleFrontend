// src/components/TopBar.js
import React from 'react';
import userIcon from '../assets/images/user-icon.png';
import levelIcon from '../assets/images/level.png';
import walletIcon from '../assets/images/wallet-icon.png';
import './TopBar.css';

const TopBar = ({ username, level }) => {
    return (
        <div className="top-bar">
            <div className="user-info">
                <img src={userIcon} alt="User" className="user-icon" />
                <span className="username">{username}</span>
                <img src={levelIcon} alt="Level" className="level-icon" />
                <span className="level">{level}</span>
            </div>
            <div className="icon-bar">
                <img src={walletIcon} alt="Wallet" className="wallet-icon" />
            </div>
        </div>
    );
};

export default TopBar;
