import React from 'react';
import { Link } from 'react-router-dom';
import homeIcon from '../../assets/images/home-icon.png';
import friendsIcon from '../../assets/images/friends-icon.png';
import pickaxeIcon from '../../assets/images/pickaxe-icon.png';
import { useUserStats } from '../UserStatsContext';
import './SecondaryBar.css';

const SecondaryBar = () => {
    const { userStats } = useUserStats();

    return (
        <div className="secondary-bar">
            <Link to="/home" className="nav-button">
                <img src={homeIcon} alt="Home" className="home-icon" />
                <div>Home</div>
            </Link>
            <div className="income-info">
                <img src={pickaxeIcon} alt="Income" className="income-icon" />
                <span>{userStats.hourlyIncome} gold/hour</span>
            </div>
            <Link to="/friends" className="nav-button">
                <img src={friendsIcon} alt="Friends" className="friends-icon" />
                <div>Friends</div>
            </Link>
        </div>
    );
};

export default SecondaryBar;
