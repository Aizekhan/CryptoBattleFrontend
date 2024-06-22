import React from 'react';
import './UpgradePanel.css';
import { useUserStats } from '../UserStatsContext';

const UpgradePanel = ({ mine, onClose, onUpgrade }) => {
    const { userStats } = useUserStats();
    const upgradeCost = mine.cost * 2 ** (mine.currentLevel - 1);

    return (
        <div className="upgrade-panel">
            <h2>Upgrade Mine</h2>
            <img src={mine.img} alt={`Mine ${mine.id}`} />
            <div className="upgrade-cost">Вартість апгрейду: {upgradeCost} золота</div>
            <div className="current-income">Дохід: +{mine.income} золота/год</div>
            <div className="current-level">Поточний рівень: {mine.currentLevel}</div>
            <div className="button-container">
                <button className="upgrade-button" onClick={() => onUpgrade(mine.id)}>Upgrade</button>
                <button className="close-button" onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default UpgradePanel;
