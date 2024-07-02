import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.css';
import homeIcon from '../../assets/images/home-icon.png';
import friendsIcon from '../../assets/images/friends-icon.png';
import pickaxeIcon from '../../assets/images/pickaxe-icon.png';
import battleIcon from '../../assets/images/battle-icon.png';
import shopIcon from '../../assets/images/shop-icon.png';
import heroIcon from '../../assets/images/hero-icon.png';

const NavigationBar = ({ isBattlePage }) => {
    return (
        <div className={`navigation-bar ${isBattlePage ? 'hidden-navigation-bar' : ''}`}>
            <Link to="/home" className="nav-button">
                <img src={homeIcon} alt="Home" className="icon" />
            </Link>
            <Link to="/mines" className="nav-button">
                <img src={pickaxeIcon} alt="Mines" className="icon" />
            </Link>
            <Link to="/battle" className="nav-button">
                <img src={battleIcon} alt="Battle" className="icon" />
            </Link>
            <Link to="/shop" className="nav-button">
                <img src={shopIcon} alt="Shop" className="icon" />
            </Link>
            <Link to="/hero" className="nav-button">
                <img src={heroIcon} alt="Hero" className="icon" />
            </Link>
            <Link to="/friends" className="nav-button">
                <img src={friendsIcon} alt="Friends" className="icon" />
            </Link>
        </div>
    );
};

export default NavigationBar;
