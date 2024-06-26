import React from 'react';
import './UpgradeCard.css';
import { useUserStats } from '../UserStatsContext';

const UpgradeCard = ({ mine, onClose, onUpgrade }) => {
    const { spendBalance } = useUserStats();

    const handleUpgrade = () => {
        const upgradeCost = mine.upgradeCost;
        spendBalance(upgradeCost);
        onUpgrade(mine.id);
    };

    return (
        <>
            <div className="overlay" onClick={onClose}></div>
            <div className="upgrade-card">
                <h2>Upgrade Mine</h2>
                <img src={mine.img} alt={`Mine ${mine.id}`} />
                <div className="upgrade-info">
                    <p>Вартість апгрейду: {mine.upgradeCost} золота</p>
                    <p>Дохід: +{mine.income} золота/год</p>
                    <p>Поточний рівень: {mine.currentLevel}</p>
                </div>
                <div className="upgrade-buttons">
                    <button onClick={handleUpgrade}>Upgrade</button>
                    <button onClick={onClose}>Close</button>
                </div>
            </div>
        </>
    );
};

export default UpgradeCard;
