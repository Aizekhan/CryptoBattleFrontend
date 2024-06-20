import React from 'react';
import './NavigationBar.css'; // підключимо файл стилів

const NavigationBar = () => {
    return (
        <div className="navigation-bar">
            <button className="nav-button">
                <img src="/path/to/exchange-icon.png" alt="Exchange" />
                Exchange
            </button>
            <button className="nav-button">
                <img src="/path/to/mine-icon.png" alt="Mine" />
                Mine
            </button>
            <button className="nav-button">
                <img src="/path/to/friends-icon.png" alt="Friends" />
                Friends
            </button>
            <button className="nav-button">
                <img src="/path/to/earn-icon.png" alt="Earn" />
                Earn
            </button>
            <button className="nav-button">
                <img src="/path/to/airdrop-icon.png" alt="Airdrop" />
                Airdrop
            </button>
        </div>
    );
};

export default NavigationBar;