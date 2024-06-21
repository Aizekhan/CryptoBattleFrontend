// src/components/Panels/UpgradePanel.js

import React from 'react';
import './UpgradePanel.css';

const UpgradePanel = ({ mine, onUpgrade, onClose }) => {
    return (
        <div className="upgrade-panel">
            <h2>Upgrade Mine</h2>
            <div className="mine-info">
                <img src={mine.img} alt={`Mine ${mine.id}`} />
                <div>Вартість апгрейду: {mine.upgradeCost} золота</div>
                <div>Дохід: +{mine.income} золота/год</div>
                <div>Поточний рівень: {mine.level}</div>
            </div>
            <button onClick={onUpgrade}>Upgrade</button>
            <button onClick={onClose}>Close</button>
        </div>
    );
};

export default UpgradePanel;
