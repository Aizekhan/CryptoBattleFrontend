import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import homeIcon from '../../assets/images/home-icon.png';
import friendsIcon from '../../assets/images/friends-icon.png';
import pickaxeIcon from '../../assets/images/pickaxe-icon.png';
import { useUserStats } from '../../context/UserStatsContext';
import './SecondaryBar.css';

const SecondaryBar = ({ isBattlePage }) => {
    const location = useLocation();
    const { userStats } = useUserStats();
    const currentHero = userStats.heroes.find(hero => hero.id === userStats.currentHeroId);

    return (
        <div className={`secondary-bar ${isBattlePage ? 'hidden' : ''}`}>
            <Link to="/home" className="nav-button">
                <img src={homeIcon} alt="Home" className="icon" />
            </Link>
            {location.pathname.startsWith('/mines') ? (
                <div className="income-info">
                    <img src={pickaxeIcon} alt="Income" className="icon" />
                    <span>{userStats.hourlyIncome}</span>
                </div>
            ) : (
                currentHero && (
                    <div className="hero-avatar-container">
                        <img src={currentHero.avatarImg} alt="Hero Avatar" className="hero-avatar" />
                    </div>
                )
            )}
            <Link to="/friends" className="nav-button">
                <img src={friendsIcon} alt="Friends" className="icon" />
            </Link>
        </div>
    );
};

export default SecondaryBar;
