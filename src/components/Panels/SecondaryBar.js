// src/components/Panels/SecondaryBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import homeIcon from '../assets/images/home-icon.png';
import friendsIcon from '../assets/images/friends.png';
import './SecondaryBar.css';
import { useUserStats } from '../UserStatsContext';

const SecondaryBar = () => {
    const { userStats } = useUserStats();

    return (
        <div className="secondary-bar">
            <Link to="/home" className="nav-button">
                <img src={homeIcon} alt="Home" className="home-icon" />
                <div>Home</div>
            </Link>
            <Link to="/friends" className="nav-button">
                <img src={friendsIcon} alt="Friends" className="friends-icon" />
                <div>Friends</div>
            </Link>
        </div>
    );
};

export default SecondaryBar;
