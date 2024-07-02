import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.css';
import farmIcon from '../../assets/images/farm-icon.png';
import minesIcon from '../../assets/images/mines-icon.png';
import battleIcon from '../../assets/images/battle-icon.png';
import heroIcon from '../../assets/images/hero-icon.png';
import questsIcon from '../../assets/images/quests-icon.png';

const NavigationBar = ({ isBattlePage }) => {
    return (
        <div className={`navigation-bar ${isBattlePage ? 'hidden-navigation-bar' : ''}`}>
            <Link to="/farm" className="nav-button">
                <img src={farmIcon} alt="Farm" className="icon" />
            </Link>
            <Link to="/mines" className="nav-button">
                <img src={minesIcon} alt="Mines" className="icon" />
            </Link>
            <Link to="/battle" className="nav-button">
                <img src={battleIcon} alt="Battle" className="icon" />
            </Link>
            <Link to="/hero" className="nav-button">
                <img src={heroIcon} alt="Hero" className="icon" />
            </Link>
            <Link to="/quests" className="nav-button">
                <img src={questsIcon} alt="Quests" className="icon" />
            </Link>
        </div>
    );
};

export default NavigationBar;
