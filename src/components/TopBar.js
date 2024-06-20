import React from 'react';
import userIcon from '../assets/images/user-icon.png';
import levelIcon from '../assets/images/level.png';
import friendsIcon from '../assets/images/friends.png';
import binanceIcon from '../assets/images/binance-icon.png';
import walletIcon from '../assets/images/wallet-icon.png';

const TopBar = ({ title }) => {
    return (
        <div className="top-bar">
            <div className="top-row">
                <div className="user-info">
                    <img src={userIcon} alt="User" className="user-icon" />
                    <span className="username">Максим</span>
                    <img src={levelIcon} alt="Level" className="level-icon" />
                    <span className="level">0</span>
                </div>
                <div className="icon-bar">
                    <img src={binanceIcon} alt="Binance" className="binance-icon" />
                    <img src={walletIcon} alt="Wallet" className="wallet-icon" />
                </div>
            </div>
            <div className="stats-bar">
                <div className="stat">
                    <span>{title}</span>
                </div>
                <div className="stat">
                    <img src={friendsIcon} alt="Додати друга" className="friends-icon" />
                </div>
            </div>
        </div>
    );
};

export default TopBar;
