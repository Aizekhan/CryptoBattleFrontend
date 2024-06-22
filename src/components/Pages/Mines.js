import React, { useState } from 'react';
import './Mines.css';
import { useUserStats } from '../UserStatsContext'; // Оновлений шлях
import { minesData, lockImage } from '../../data/minesData';
import UpgradePanel from '../Panels/UpgradePanel';

const Mines = () => {
    const { userStats, upgradeMine } = useUserStats();
    const [selectedMine, setSelectedMine] = useState(null);

    const handleUpgrade = (mineId) => {
        upgradeMine(mineId);
        setSelectedMine(null);
    };

    return (
        <div className="mines-container">
            <h1>Mines Page</h1>
            <div className="mines-grid">
                {userStats.mines.map((mine) => (
                    <div key={mine.id} className="mine-item" onClick={() => setSelectedMine(mine)}>
                        <img src={mine.locked ? lockImage : mine.img} alt={`Mine ${mine.id}`} />
                        <div className="mine-cost">Вартість: {mine.cost} золота</div>
                        <div className="mine-income">+{mine.income} золота/год</div>
                        <div className="mine-level">lvl: {mine.currentLevel}</div>
                    </div>
                ))}
            </div>
            {selectedMine && (
                <UpgradePanel
                    mine={selectedMine}
                    onClose={() => setSelectedMine(null)}
                    onUpgrade={handleUpgrade}
                />
            )}
        </div>
    );
};

