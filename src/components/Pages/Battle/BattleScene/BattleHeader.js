import React from 'react';
import './BattleHeader.css';
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

const BattleHeader = ({ playerStats, botStats }) => {
    console.log("Player Stats in BattleHeader:", playerStats);
    console.log("Bot Stats in BattleHeader:", botStats);

    const statsIcons = [
        { icon: hpIcon, label: 'HP', value: 'hp' },
        { icon: damageIcon, label: 'Damage', value: 'damage' },
        { icon: attackSpeedIcon, label: 'Attack Speed', value: 'attackSpeed' },
        { icon: armorIcon, label: 'Armor', value: 'armor' },
        { icon: blockChanceIcon, label: 'Block', value: 'blockChance' },
        { icon: penetrationChanceIcon, label: 'Penetration', value: 'penetrationChance' },
        { icon: critChanceIcon, label: 'Crit', value: 'critChance' },
        { icon: dodgeChanceIcon, label: 'Dodge', value: 'dodgeChance' },
        { icon: critPowerIcon, label: 'Crit Power', value: 'critPower' },
        { icon: accuracyIcon, label: 'Accuracy', value: 'accuracy' },
    ];

    const renderStats = (stats) => {
        const firstColumn = statsIcons.slice(0, 5);
        const secondColumn = statsIcons.slice(5);

        return (
            <div className="stats-container">
                <div className="stats-column">
                    {firstColumn.map(stat => (
                        <div className="hero-stat" key={stat.label}>
                            <img src={stat.icon} alt={stat.label} className="icon" />
                            <span>{stats[stat.value]}</span>
                        </div>
                    ))}
                </div>
                <div className="stats-column">
                    {secondColumn.map(stat => (
                        <div className="hero-stat" key={stat.label}>
                            <img src={stat.icon} alt={stat.label} className="icon" />
                            <span>{stats[stat.value]}</span>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <div className="battle-header">
            <div className="hero-stats">
                {renderStats(playerStats)}
            </div>
            <div className="hero-stats">
                {renderStats(botStats)}
            </div>
        </div>
    );
};

export default BattleHeader;
