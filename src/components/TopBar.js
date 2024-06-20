import React from 'react';
import './TopBar.css';
import userIcon from '../assets/images/user-icon.png';
import friendsIcon from '../assets/images/friends.png';
import binanceIcon from '../assets/images/binance-icon.png';
import walletIcon from '../assets/images/wallet-icon.png';
import levelIcon from '../assets/images/level.png'; // Іконка рівня

const TopBar = ({ username, tapIncome, level, hourlyIncome }) => {
    return (
        <div className="top-bar">
            <div className="top-row">
                <div className="user-info">
                    <img src={userIcon} alt="User" className="user-icon" />
                    <span className="username">{username}</span>
                    <div className="level-info">
                        <img src={levelIcon} alt="Level" className="level-icon" />
                        <span className="level">{level}</span>
                    </div>
                </div>
                <div className="icon-bar">
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
                    <img src={friendsIcon} alt="Friends" className="friends-icon" /> {/* Замість рівня */}
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