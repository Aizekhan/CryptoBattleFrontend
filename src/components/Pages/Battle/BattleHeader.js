import React from 'react';
import './BattleHeader.css';
import hpIcon from '../../../assets/icons/hp.png';
import armorIcon from '../../../assets/icons/armor.png';
import damageIcon from '../../../assets/icons/damage.png';
import attackSpeedIcon from '../../../assets/icons/attackSpeed.png';
import blockChanceIcon from '../../../assets/icons/blockChance.png';
import penetrationChanceIcon from '../../../assets/icons/penetrationChance.png';
import critChanceIcon from '../../../assets/icons/critChance.png';
import dodgeChanceIcon from '../../../assets/icons/dodgeChance.png';
import critPowerIcon from '../../../assets/icons/critPower.png';
import accuracyIcon from '../../../assets/icons/accuracy.png';

const BattleHeader = ({ playerStats, botStats }) => {
    return (
        <div className="battle-header">
            <div className="hero-stats">
                <div className="hero-stat"><img src={hpIcon} alt="HP" className="icon" /> {playerStats.hp}</div>
                <div className="hero-stat"><img src={armorIcon} alt="Armor" className="icon" /> {playerStats.armor}</div>
                <div className="hero-stat"><img src={damageIcon} alt="Damage" className="icon" /> {playerStats.damage}</div>
                <div className="hero-stat"><img src={attackSpeedIcon} alt="Attack Speed" className="icon" /> {playerStats.attackSpeed}</div>
                <div className="hero-stat"><img src={blockChanceIcon} alt="Block Chance" className="icon" /> {playerStats.blockChance}</div>
                <div className="hero-stat"><img src={penetrationChanceIcon} alt="Penetration Chance" className="icon" /> {playerStats.penetrationChance}</div>
                <div className="hero-stat"><img src={critChanceIcon} alt="Crit Chance" className="icon" /> {playerStats.critChance}</div>
                <div className="hero-stat"><img src={dodgeChanceIcon} alt="Dodge Chance" className="icon" /> {playerStats.dodgeChance}</div>
                <div className="hero-stat"><img src={critPowerIcon} alt="Crit Power" className="icon" /> {playerStats.critPower}</div>
                <div className="hero-stat"><img src={accuracyIcon} alt="Accuracy" className="icon" /> {playerStats.accuracy}</div>
            </div>
            <div className="hero-stats">
                <div className="hero-stat"><img src={hpIcon} alt="HP" className="icon" /> {botStats.hp}</div>
                <div className="hero-stat"><img src={armorIcon} alt="Armor" className="icon" /> {botStats.armor}</div>
                <div className="hero-stat"><img src={damageIcon} alt="Damage" className="icon" /> {botStats.damage}</div>
                <div className="hero-stat"><img src={attackSpeedIcon} alt="Attack Speed" className="icon" /> {botStats.attackSpeed}</div>
                <div className="hero-stat"><img src={blockChanceIcon} alt="Block Chance" className="icon" /> {botStats.blockChance}</div>
                <div className="hero-stat"><img src={penetrationChanceIcon} alt="Penetration Chance" className="icon" /> {botStats.penetrationChance}</div>
                <div className="hero-stat"><img src={critChanceIcon} alt="Crit Chance" className="icon" /> {botStats.critChance}</div>
                <div className="hero-stat"><img src={dodgeChanceIcon} alt="Dodge Chance" className="icon" /> {botStats.dodgeChance}</div>
                <div className="hero-stat"><img src={critPowerIcon} alt="Crit Power" className="icon" /> {botStats.critPower}</div>
                <div className="hero-stat"><img src={accuracyIcon} alt="Accuracy" className="icon" /> {botStats.accuracy}</div>
            </div>
        </div>
    );
};

export default BattleHeader;
