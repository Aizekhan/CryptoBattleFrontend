import React, { useState } from 'react';
import { minesData, lockImage } from '../../data/minesData';
import './Mines.css';
import UpgradePanel from '../Panels/UpgradePanel';
import { useUserStats } from '../UserStatsContext';

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
                {userStats.mines.map(mine => (
                    <div key={mine.id} className="mine-item" onClick={() => !mine.locked && setSelectedMine(mine)}>
                        <img src={mine.img} alt={`Mine ${mine.id}`} className="mine-image" />
                        {mine.locked && <img src={lockImage} alt="Locked" className="lock-overlay" />}
                        <div className="mine-info">
                            <p>{mine.locked ? 'Locked' : `Basic Mine ${mine.id}`}</p>
                            {!mine.locked && (
                                <>
                                    <p>Вартість апгрейду: {mine.upgradeCost} золота</p>
                                    <p>Поточний рівень: {mine.currentLevel}</p>
                                </>
                            )}
                        </div>
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

export default Mines;
