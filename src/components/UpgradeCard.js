import React from 'react';
import './UpgradeCard.css';
import { useUserStats } from './UserStatsContext';

const UpgradeCard = ({ card }) => {
    const { userStats, upgradeCard } = useUserStats();

    const handleUpgrade = () => {
        upgradeCard(card.id);
    };

    return (
        <div className="upgrade-card">
            <h2>{card.name}</h2>
            <img src={card.img} alt={card.name} />
            <div className="card-info">
                <p>Вартість апгрейду: {card.cost.toFixed(2)} золота</p>
                <p>Поточний рівень: {card.currentLevel}</p>
                <p>Дохід: {card.income.toFixed(2)} золота в годину</p>
            </div>
            <div className="button-container">
                <button 
                    onClick={handleUpgrade} 
                    disabled={userStats.balance < card.cost}>
                    Upgrade
                </button>
            </div>
        </div>
    );
};

export default UpgradeCard;
