/import React from 'react';
import { Link } from 'react-router-dom';
import homeIcon from '../assets/images/home-icon.png';
import friendsIcon from '../assets/images/friends.png';
import './SecondaryBar.css';

const SecondaryBar = () => {
    return (
        <div className="secondary-bar">
            <Link to="/home" className="nav-button">
                <img src={homeIcon} alt="Home" className="nav-icon" />
                <span className="nav-text">Home</span>
            </Link>
            <Link to="/friends" className="nav-button">
                <img src={friendsIcon} alt="Friends" className="nav-icon" />
                <span className="nav-text">Friends</span>
            </Link>
        </div>
    );
};

export default SecondaryBar;