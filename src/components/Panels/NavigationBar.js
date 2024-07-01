import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import farmIcon from '../../assets/images/farm-icon.png';
import minesIcon from '../../assets/images/mines-icon.png';
import battleIcon from '../../assets/images/battle-icon.png';
import questsIcon from '../../assets/images/quests-icon.png';
import heroIcon from '../../assets/images/hero-icon.png';
import './NavigationBar.css';

const NavigationBar = ({ isBattlePage }) => {
    const tacticsButtons = (
        <div className="tactics">
            <button>Normal</button>
            <button>Aggressive</button>
            <button>Defensive</button>
        </div>
    );

    return (
        <div className="navigation-bar">
            {isBattlePage ? (
                tacticsButtons
            ) : (
                <>
                    <NavLink to="/farm" className={({ isActive }) => isActive ? 'nav-button active' : 'nav-button'}>
                        <img src={farmIcon} alt="Farm" />
                    </NavLink>
                    <NavLink to="/mines" className={({ isActive }) => isActive ? 'nav-button active' : 'nav-button'}>
                        <img src={minesIcon} alt="Mines" />
                    </NavLink>
                    <NavLink to="/battle" className={({ isActive }) => isActive ? 'nav-button active' : 'nav-button'}>
                        <img src={battleIcon} alt="Battle" />
                    </NavLink>
                    <NavLink to="/quests" className={({ isActive }) => isActive ? 'nav-button active' : 'nav-button'}>
                        <img src={questsIcon} alt="Quests" />
                    </NavLink>
                    <NavLink to="/hero" className={({ isActive }) => isActive ? 'nav-button active' : 'nav-button'}>
                        <img src={heroIcon} alt="Hero" />
                    </NavLink>
                </>
            )}
        </div>
    );
};

export default NavigationBar;
