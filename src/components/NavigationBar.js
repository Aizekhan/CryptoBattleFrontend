import React from 'react';
import { NavLink } from 'react-router-dom';
import homeIcon from '../assets/images/home.png';
import minesIcon from '../assets/images/mines.png';
import battleIcon from '../assets/images/battle.png';
import questsIcon from '../assets/images/quests.png';
import heroIcon from '../assets/images/hero.png';
import './NavigationBar.css';

const NavigationBar = () => {
    return (
        <div className="navigation-bar">
            <NavLink to="/" className="nav-button">
                <img src={homeIcon} alt="Home" />
                <span>Home</span>
            </NavLink>
            <NavLink to="/mines" className="nav-button">
                <img src={minesIcon} alt="Mines" />
                <span>Mines</span>
            </NavLink>
            <NavLink to="/battle" className="nav-button">
                <img src={battleIcon} alt="Battle" />
                <span>Battle</span>
            </NavLink>
            <NavLink to="/quests" className="nav-button">
                <img src={questsIcon} alt="Quests" />
                <span>Quests</span>
            </NavLink>
            <NavLink to="/hero" className="nav-button">
                <img src={heroIcon} alt="Hero" />
                <span>Hero</span>
            </NavLink>
        </div>
    );
};

export default NavigationBar;
