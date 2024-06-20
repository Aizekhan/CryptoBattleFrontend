// src/components/TopBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './TopBar.css';
import userIcon from '../assets/images/user-icon.png';
import homeIcon from '../assets/images/home-icon.png'; // Новий імпорт для Home іконки
import friendsIcon from '../assets/images/friends-icon.png'; // Новий імпорт для Friends іконки

const TopBar = ({ username, level }) => {
    return (
        <div className="top-bar">
            <div className="left-icons">
                <Link to="/home" className="nav-button">
                    <img src={homeIcon} alt="Home" className="home-icon" />
                </Link>
            </div>
            <div className="user-info">
                <img src={userIcon} alt="User" className="user-icon" />
                <span className="username">{username}</span>
                <div className="level-info">
                    <img src="../assets/images/level-icon.png" alt="Level" className="level-icon" />
                    <span className="level">{level}</span>
                </div>
            </div>
            <div className="right-icons">
                <Link to="/friends" className="nav-button">
                    <img src={friendsIcon} alt="Friends" className="friends-icon" />
                </Link>
            </div>
        </div>
    );
};

export default TopBar;
