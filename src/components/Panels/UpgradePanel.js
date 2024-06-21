// src/components/UpgradePanel.js

import React from 'react';
import './UpgradePanel.css';

const UpgradePanel = ({ mine, onUpgrade, onClose }) => {
    return (
        <div className="overlay">
            <div className="upgrade-panel">
                <h2>Mine {mine.id}</h2>
                <img src={mine.img} alt={`Mine ${mine.id}`} />
                <div>Current Income: {mine.income} gold/hour</div>
                <div>Upgrade Cost: {mine.upgradeCost} gold</div>
                <div>Level: {mine.level}</div>
                <button onClick={onUpgrade}>Upgrade</button>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default UpgradePanel;
