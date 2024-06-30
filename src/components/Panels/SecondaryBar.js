import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import homeIcon from '../../assets/images/home-icon.png';
import friendsIcon from '../../assets/images/friends-icon.png';
import pickaxeIcon from '../../assets/images/pickaxe-icon.png';
import { useUserStats } from '../../context/UserStatsContext';
import './SecondaryBar.css';

const SecondaryBar = () => {
    const location = useLocation();
    const { userStats } = useUserStats();
    const currentHero = userStats.heroes.find(hero => hero.id === userStats.currentHeroId);

    return (
        <div className="secondary-bar">
            <Link to="/home" className="nav-button">
                <img src={homeIcon} alt="Home" className="home-icon" />
            </Link>
            {location.pathname.startsWith('/mines') ? (
                <div className="income-info">
                    <img src={pickaxeIcon} alt="Income" className="income-icon" />
                    <span>{userStats.hourlyIncome}</span>
                </div>
            ) : (
                <div className="hero-info">
                    {currentHero && (
                        <img src={currentHero.avatarImg} alt="Hero Avatar" className="hero-avatar" />
                    )}
                </div>
            )}
            <Link to="/friends" className="nav-button">
                <img src={friendsIcon} alt="Friends" className="friends-icon" />
            </Link>
        </div>
    );
};

export default SecondaryBar;
