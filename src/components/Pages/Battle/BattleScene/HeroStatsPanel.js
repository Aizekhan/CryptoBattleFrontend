import React from 'react';
import './HeroStatsPanel.css';
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

const HeroStatsPanel = ({ stats }) => {
    const statsIcons = [
        { icon: hpIcon, label: 'HP', value: 'hp' },
        { icon: damageIcon, label: 'Damage', value: 'damage' },
        { icon: attackSpeedIcon, label: 'Attack Speed', value: 'attackSpeed' },
        { icon: armorIcon, label: 'Armor', value: 'armor' },
        { icon: blockChanceIcon, label: 'Block Chance', value: 'blockChance' },
        { icon: penetrationChanceIcon, label: 'Penetration Chance', value: 'penetrationChance' },
        { icon: critChanceIcon, label: 'Crit Chance', value: 'critChance' },
        { icon: dodgeChanceIcon, label: 'Dodge Chance', value: 'dodgeChance' },
        { icon: critPowerIcon, label: 'Crit Power', value: 'critPower' },
        { icon: accuracyIcon, label: 'Accuracy', value: 'accuracy' },
    ];

    return (
        <div className="hero-stats-panel">
            {statsIcons.map(stat => (
                <div className="hero-stat" key={stat.label}>
                    <img src={stat.icon} alt={stat.label} className="icon" />
                    <span>{stats[stat.value]}</span>
                </div>
            ))}
        </div>
    );
};

export default HeroStatsPanel;
