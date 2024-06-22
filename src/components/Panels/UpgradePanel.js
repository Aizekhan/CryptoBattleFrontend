import React from 'react';
import './UpgradePanel.css';
import { useUserStats } from '../UserStatsContext';

const UpgradePanel = ({ mine, onClose }) => {
    const { upgradeMine } = useUserStats();

    const handleUpgrade = () => {
        upgradeMine(mine.id);
        onClose();
    };

    return (
        <div className="upgrade-panel">
            <h2>Upgrade Mine</h2>
            <img src={mine.img} alt={`Mine ${mine.id}`} />
            <div className="upgrade-info">
                <p>Вартість апгрейду: {mine.cost} золота</p>
                <p>Дохід: +{mine.income} золота/год</p>
                <p>Поточний рівень: {mine.currentLevel}</p>
            </div>
            <div className="upgrade-buttons">
                <button onClick={handleUpgrade}>Upgrade</button>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default UpgradePanel;
