// src/components/NavigationBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import farmIcon from '../assets/images/farm.png'; // Іконка для Farm
import minesIcon from '../assets/images/mines.png';
import battleIcon from '../assets/images/battle.png';
import questsIcon from '../assets/images/quests.png';
import heroIcon from '../assets/images/hero.png';
import './NavigationBar.css';

const NavigationBar = () => {
    return (
        <div className="navigation-bar">
            <Link to="/farm" className="nav-button">
                <img src={farmIcon} alt="Farm" />
                Farm
            </Link>
            <Link to="/mines" className="nav-button">
                <img src={minesIcon} alt="Mines" />
                Mines
            </Link>
            <Link to="/battle" className="nav-button">
                <img src={battleIcon} alt="Battle" />
                Battle
            </Link>
            <Link to="/quests" className="nav-button">
                <img src={questsIcon} alt="Quests" />
                Quests
            </Link>
            <Link to="/hero" className="nav-button">
                <img src={heroIcon} alt="Hero" />
                Hero
            </Link>
        </div>
    );
};

export default NavigationBar;
