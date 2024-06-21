import React from 'react';
import './UserStats.css';
import levelIcon from '../assets/images/level-icon.png';
import walletIcon from '../assets/images/wallet-icon.png';

const UserStats = ({ level, balance, hourlyIncome }) => {
    return (
        <div className="user-stats">
            <div className="level">
                <img src={levelIcon} alt="Level Icon" />
                <span>Level: {level}</span>
            </div>
            <div className="balance">
                <img src={walletIcon} alt="Wallet Icon" />
                <span>{balance} gold</span>
            </div>
            <div className="income">
                <span>Income: {hourlyIncome} gold/hour</span>
            </div>
        </div>
    );
};

export default UserStats;
