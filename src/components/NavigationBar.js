import React from 'react';
import './NavigationBar.css'; // Підключимо файл стилів
import homeIcon from '../assets/images/home.png';
import minesIcon from '../assets/images/mines.png';
import battleIcon from '../assets/images/battle.png';
import questsIcon from '../assets/images/quests.png';
import heroIcon from '../assets/images/store.png';

const NavigationBar = () => {
    return (
        <div className="navigation-bar">
            <button className="nav-button">
                <img src={homeIcon} alt="Home" />
                Home
            </button>
            <button className="nav-button">
                <img src={minesIcon} alt="Mines" />
                Mines
            </button>
            <button className="nav-button">
                <img src={battleIcon} alt="Battle" />
                Battle
            </button>
            <button className="nav-button">
                <img src={questsIcon} alt="Quests" />
                Quests
            </button>
            <button className="nav-button">
                <img src={heroIcon} alt="Hero" />
                Hero
            </button>
        </div>
    );
};

export default NavigationBar;