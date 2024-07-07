import React from 'react';
import hpIcon from '../../../../assets/icons/hp.png';
import armorIcon from '../../../../assets/icons/armor.png';
import damageIcon from '../../../../assets/icons/damage.png';
import attackSpeedIcon from '../../../../assets/icons/attackSpeed.png';
import blockChanceIcon from '../../../../assets/icons/blockChance.png';
import penetrationChanceIcon from '../../../../assets/icons/penetrationChance.png';
import critChanceIcon from '../../../../assets/icons/critChance.png';
import dodgeChanceIcon from '../../../../assets/icons/dodgeChance.png';
import critPowerIcon from '../../../../assets/icons/critPower.png';
import accuracyIcon from '../../../../assets/icons/accuracy.png';
import statsPanelBackground from '../../../../assets/icons/StatsPanel-background.png';
import './HeroStatsCard.css';

const HeroStatsCard = ({ stats }) => {

    const backgroundStyle = {
        backgroundImage: `url(${statsPanelBackground})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center'
    };

    return (
        <div className="hero-stats-card" style={backgroundStyle}>
            <div className="stats-container">
                <div className="stat-column">
                    <div className="stat">
                        <img src={hpIcon} alt="HP" className="stat-icon" />
                        <span className="stat-value">{stats.hp}</span>
                    </div>
                    <div className="stat">
                        <img src={armorIcon} alt="Armor" className="stat-icon" />
                        <span className="stat-value">{stats.armor}</span>
                    </div>
                    <div className="stat">
                        <img src={damageIcon} alt="Damage" className="stat-icon" />
                        <span className="stat-value">{stats.damage}</span>
                    </div>
                    <div className="stat">
                        <img src={attackSpeedIcon} alt="Attack Speed" className="stat-icon" />
                        <span className="stat-value">{stats.attackSpeed}</span>
                    </div>
                    <div className="stat">
                        <img src={blockChanceIcon} alt="Block Chance" className="stat-icon" />
                        <span className="stat-value">{stats.blockChance}%</span>
                    </div>
                </div>
                <div className="stat-column">
                    <div className="stat">
                        <img src={penetrationChanceIcon} alt="Penetration Chance" className="stat-icon" />
                        <span className="stat-value">{stats.penetrationChance}%</span>
                    </div>
                    <div className="stat">
                        <img src={critChanceIcon} alt="Crit Chance" className="stat-icon" />
                        <span className="stat-value">{stats.critChance}%</span>
                    </div>
                    <div className="stat">
                        <img src={dodgeChanceIcon} alt="Dodge Chance" className="stat-icon" />
                        <span className="stat-value">{stats.dodgeChance}%</span>
                    </div>
                    <div className="stat">
                        <img src={critPowerIcon} alt="Crit Power" className="stat-icon" />
                        <span className="stat-value">{stats.critPower}%</span>
                    </div>
                    <div className="stat">
                        <img src={accuracyIcon} alt="Accuracy" className="stat-icon" />
                        <span className="stat-value">{stats.accuracy}%</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroStatsCard;
