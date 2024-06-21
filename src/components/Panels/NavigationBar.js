import React from 'react';
import { Link } from 'react-router-dom';
import farmIcon from '../../assets/images/farm-icon.png';
import minesIcon from '../../assets/images/mines-icon.png';
import battleIcon from '../../assets/images/battle-icon.png';
import questsIcon from '../../assets/images/quests-icon.png';
import heroIcon from '../../assets/images/hero-icon.png';
import './NavigationBar.css';

const NavigationBar = () => {
    return (
        <div className="navigation-bar">
            <Link to="/farm" className="nav-button">
                <img src={farmIcon} alt="Farm" />
            </Link>
            <Link to="/mines" className="nav-button">
                <img src={minesIcon} alt="Mines" />
            </Link>
            <Link to="/battle" className="nav-button">
                <img src={battleIcon} alt="Battle" />
            </Link>
            <Link to="/quests" className="nav-button">
                <img src={questsIcon} alt="Quests" />
            </Link>
            <Link to="/hero" className="nav-button">
                <img src={heroIcon} alt="Hero" />
            </Link>
        </div>
    );
};

export default NavigationBar;
