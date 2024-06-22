// src/components/Pages/Mines.js

import React, { useState } from 'react';
import { minesData } from '../../data/minesData';
import { useUserStats } from '../UserStatsContext';
import UpgradePanel from '../Panels/UpgradePanel';
import './Mines.css';

const Mines = () => {
    const { userStats, upgradeMine, spendBalance } = useUserStats();
    const [selectedMine, setSelectedMine] = useState(null);

    const handleUpgradeClick = (mine) => {
        setSelectedMine(mine);
    };

    const closeUpgradePanel = () => {
        setSelectedMine(null);
    };

    const upgradeSelectedMine = () => {
        if (selectedMine) {
            upgradeMine(selectedMine.id);
            closeUpgradePanel();
        }
    };

    return (
        <div className="mines-container">
            <h1>Mines Page</h1>
            <div className="mines-grid">
                {userStats.mines.map((mine, index) => (
                    <div key={mine.id} className="mine-item" onClick={() => handleUpgradeClick(mine)}>
                        <img src={mine.img} alt={`Mine ${mine.id}`} />
                        <div className="mine-cost">Вартість: {mine.cost} золота</div>
                        <div className="mine-income">+{mine.income} золота/год</div>
                        <div>lvl: {mine.level}</div>
                    </div>
                ))}
            </div>
            {selectedMine && (
                <UpgradePanel
                    mine={selectedMine}
                    onClose={closeUpgradePanel}
                    onUpgrade={upgradeSelectedMine}
                />
            )}
        </div>
    );
};

export default Mines;
