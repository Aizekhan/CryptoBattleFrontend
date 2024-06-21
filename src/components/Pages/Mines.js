// src/components/Pages/Mines.js

import React, { useState } from 'react';
import './Mines.css';
import { minesData, lockImage } from '../../data/minesData';
import { useUserStats } from '../UserStatsContext';
import UpgradePanel from '../Panels/UpgradePanel';

const Mines = () => {
    const { userStats, updateUserStats } = useUserStats();
    const [selectedMine, setSelectedMine] = useState(null);

    const handleUpgrade = () => {
        const selectedMineData = minesData[selectedMine];
        if (userStats.balance >= selectedMineData.upgradeCost) {
            updateUserStats({
                balance: userStats.balance - selectedMineData.upgradeCost
            });
            // Ваш функціонал для апгрейду шахти тут
            setSelectedMine(null); // Закрити панель після апгрейду
        } else {
            alert('Недостатньо золота для апгрейду!');
        }
    };

    return (
        <div className="mines-container">
            <h1>Mines Page</h1>
            <div className="mines-grid">
                {minesData.map((mine, index) => (
                    <div key={index} className={`mine-item ${mine.locked ? 'locked' : ''}`} onClick={() => !mine.locked && setSelectedMine(index)}>
                        <img src={mine.locked ? lockImage : mine.img} alt={`Mine ${mine.id}`} />
                        <div className="mine-cost">Cost: {mine.cost} gold</div>
                        <div className="mine-income">+{mine.income} gold/hour</div>
                        <div className="mine-level">lvl: {mine.level}</div>
                    </div>
                ))}
            </div>

            {selectedMine !== null && (
                <UpgradePanel 
                    mine={minesData[selectedMine]} 
                    onUpgrade={handleUpgrade} 
                    onClose={() => setSelectedMine(null)} 
                />
            )}
        </div>
    );
};

export default Mines;
