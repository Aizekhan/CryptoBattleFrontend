import React from 'react';
import './BattleHeader.css';

const BattleHeader = ({ playerHP, botHP }) => {
    return (
        <div className="battle-header">
            <div className="hero-hp">Hero 1 HP: {playerHP.toFixed(2)}</div>
            <div className="hero-hp">Hero 2 HP: {botHP.toFixed(2)}</div>
        </div>
    );
};

export default BattleHeader;
