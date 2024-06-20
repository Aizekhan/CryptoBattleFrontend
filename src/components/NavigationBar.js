// src/components/NavigationBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import farmIcon from '../assets/images/farm-icon.png';
import minesIcon from '../assets/images/mines-icon.png';
import battleIcon from '../assets/images/battle-icon.png';
import questsIcon from '../assets/images/quests-icon.png';
import heroIcon from '../assets/images/hero-icon.png';
import './NavigationBar.css';

const NavigationBar = () => {
    return (
        <div className="navigation-bar">
            <Link to="/farm" className="nav-button">
                <img src={farmIcon} alt="Farm" className="nav-icon" />
                <div>Farm</div>
            </Link>
            <Link to="/mines" className="nav-button">
                <img src={minesIcon} alt="Mines" className="nav-icon" />
                <div>Mines</div>
            </Link>
            <Link to="/battle" className="nav-button">
                <img src={battleIcon} alt="Battle" className="nav-icon" />
                <div>Battle</div>
            </Link>
            <Link to="/quests" className="nav-button">
                <img src={questsIcon} alt="Quests" className="nav-icon" />
                <div>Quests</div>
            </Link>
            <Link to="/hero" className="nav-button">
                <img src={heroIcon} alt="Hero" className="nav-icon" />
                <div>Hero</div>
            </Link>
        </div>
    );
};

export default NavigationBar;
