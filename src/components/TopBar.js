import React from 'react';
import './TopBar.css'; // підключимо файл стилів

const TopBar = ({ username, walletConnected }) => {
    return (
        <div className="top-bar">
            <div className="user-info">
                <img src="/path/to/user-icon.png" alt="User" />
                <span>{username}</span>
            </div>
            <div className="wallet-info">
                <img src="/path/to/wallet-icon.png" alt="Wallet" />
                <span>{walletConnected ? "Connected" : "Not Connected"}</span>
            </div>
        </div>
    );
};

export default TopBar;