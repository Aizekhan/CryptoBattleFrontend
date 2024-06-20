import React from 'react';
import { Link } from 'react-router-dom';
import './SecondaryBar.css';
import homeIcon from '../assets/images/home-icon.png';
import friendsIcon from '../assets/images/friends-icon.png';

const SecondaryBar = () => {
    return (
        <div className="secondary-bar">
            <Link to="/home">
                <img src={homeIcon} alt="Home" className="home-icon" />
            </Link>
            <Link to="/friends">
                <img src={friendsIcon} alt="Friends" className="friends-icon" />
            </Link>
        </div>
    );
};

export default SecondaryBar;