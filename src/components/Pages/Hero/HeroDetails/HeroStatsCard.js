import React from 'react';
import appImages from '../../../../context/appImages'; // ≤мпортуЇмо ≥конки з appImages.js
import './HeroStatsCard.css';

const HeroStatsCard = ({ stats }) => {
    const backgroundStyle = {
        backgroundImage: `url(${appImages.icons.statsPanelBackground})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'cover', // «м≥на розм≥ру фону, щоб в≥н покривав весь контейнер
    };

    return (
        <div className="hero-stats-card" style={backgroundStyle}>
            <div className="stats-container">
                <div className="stat-column">
                    <div className="stat">
                        <img src={appImages.icons.hp} alt="HP" className="stat-icon" />
                        <span className="stat-value">{stats.hp}</span>
                    </div>
                    <div className="stat">
                        <img src={appImages.icons.armor} alt="Armor" className="stat-icon" />
                        <span className="stat-value">{stats.armor}</span>
                    </div>
                    <div className="stat">
                        <img src={appImages.icons.damage} alt="Damage" className="stat-icon" />
                        <span className="stat-value">{stats.damage}</span>
                    </div>
                    <div className="stat">
                        <img src={appImages.icons.attackSpeed} alt="Attack Speed" className="stat-icon" />
                        <span className="stat-value">{stats.attackSpeed}</span>
                    </div>
                    <div className="stat">
                        <img src={appImages.icons.blockChance} alt="Block Chance" className="stat-icon" />
                        <span className="stat-value">{stats.blockChance}%</span>
                    </div>
                </div>
                <div className="stat-column">
                    <div className="stat">
                        <img src={appImages.icons.penetrationChance} alt="Penetration Chance" className="stat-icon" />
                        <span className="stat-value">{stats.penetrationChance}%</span>
                    </div>
                    <div className="stat">
                        <img src={appImages.icons.critChance} alt="Crit Chance" className="stat-icon" />
                        <span className="stat-value">{stats.critChance}%</span>
                    </div>
                    <div className="stat">
                        <img src={appImages.icons.dodgeChance} alt="Dodge Chance" className="stat-icon" />
                        <span className="stat-value">{stats.dodgeChance}%</span>
                    </div>
                    <div className="stat">
                        <img src={appImages.icons.critPower} alt="Crit Power" className="stat-icon" />
                        <span className="stat-value">{stats.critPower}%</span>
                    </div>
                    <div className="stat">
                        <img src={appImages.icons.accuracy} alt="Accuracy" className="stat-icon" />
                        <span className="stat-value">{stats.accuracy}%</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroStatsCard;
