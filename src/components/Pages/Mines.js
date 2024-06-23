import React, { useState } from 'react';
import './Mines.css';
import { useUserStats } from '../UserStatsContext';
import { minesData, lockImage } from '../../data/minesData';

const Mines = () => {
    const { userStats, upgradeMine } = useUserStats();
    const [selectedMine, setSelectedMine] = useState(null);

    const handleUpgrade = (mine) => {
        if (mine.locked) return;
        setSelectedMine(mine);
    };

    const closeUpgradePanel = () => {
        setSelectedMine(null);
    };

    return (
        <div className="mines-container">
            <h1>Mines Page</h1>
            <div className="mines-grid">
                {userStats.mines.map(mine => (
                    <div key={mine.id} className={`mine-item ${mine.locked ? 'locked' : ''}`} onClick={() => handleUpgrade(mine)}>
                        <img src={mine.img} alt={`Mine ${mine.id}`} />
                        <div className="mine-info">
                            <p>Вартість: {mine.upgradeCost} золота</p>
                            <p>+{mine.income} золота/год</p>
                            <p>lvl: {mine.currentLevel}</p>
                        </div>
                    </div>
                ))}
            </div>
            {selectedMine && (
                <div className="upgrade-panel">
                    <h2>Upgrade Mine</h2>
                    <img src={selectedMine.img} alt={`Mine ${selectedMine.id}`} />
                    <div className="upgrade-info">
                        <p>Вартість апгрейду: {selectedMine.upgradeCost} золота</p>
                        <p>Дохід: +{selectedMine.income} золота/год</p>
                        <p>Поточний рівень: {selectedMine.currentLevel}</p>
                    </div>
                    <div className="upgrade-buttons">
                        <button onClick={() => { upgradeMine(selectedMine.id); closeUpgradePanel(); }}>Upgrade</button>
                        <button onClick={closeUpgradePanel}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Mines;
