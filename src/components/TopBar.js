import React from 'react';
import { Link } from 'react-router-dom';
import './TopBar.css';
import userIcon from '../assets/images/user-icon.png';
import levelIcon from '../assets/images/level.png';
import walletIcon from '../assets/images/wallet-icon.png';
import friendsIcon from '../assets/images/friends.png';

const TopBar = ({ username, level }) => {
    return (
        <div className="top-bar">
            <div className="top-row">
                <div className="user-info">
                    <img src={userIcon} alt="User" className="user-icon" />
                    <span className="username">{username}</span>
                </div>
                <div className="level-info">
                    <img src={levelIcon} alt="Level" className="level-icon" />
                    <span className="level">{level}</span>
                </div>
                <div className="wallet-info">
                    <img src={walletIcon} alt="Wallet" className="wallet-icon" />
                </div>
            </div>
            <div className="secondary-bar">
                <Link to="/home" className="nav-button">
                    <img src={homeIcon} alt="Home" className="nav-icon" />
                </Link>
                <Link to="/friends" className="nav-button">
                    <img src={friendsIcon} alt="Friends" className="nav-icon" />
                </Link>
            </div>
        </div>
    );
};

export default TopBar;
