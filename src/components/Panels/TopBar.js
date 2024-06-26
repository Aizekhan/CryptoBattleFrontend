import React from 'react';
import userIcon from '../../assets/images/user-icon.png';
import walletIcon from '../../assets/images/wallet-icon.png';
import coinImage from '../../assets/images/coin.png';
import './MainLayout.css';

const TopBar = () => {
    return (
        <div className="top-bar">
            <div className="user-info">
                <img src={userIcon} alt="User" />
                <span>Username</span>
            </div>
            <div className="balance-info">
                <img src={coinImage} alt="Coin" className="coin-icon" />
                <span>1000000</span>
            </div>
            <div className="wallet-info">
                <img src={walletIcon} alt="Wallet" />
            </div>
        </div>
    );
};

export default TopBar;
