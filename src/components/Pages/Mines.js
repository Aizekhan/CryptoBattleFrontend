import React, { useState, useEffect } from 'react';
import { useUserStats } from '../UserStatsContext';
import UpgradePanel from '../Panels/UpgradePanel';
import { minesData } from '../../data/minesData';
import lockImg from '../../assets/images/lock.png';
import './Mines.css';

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
                    <div key={mine.id} className="mine-item" onClick={() => setSelectedMine(mine)}>
                        <img src={mine.locked ? lockImg : mine.img} alt={`Mine ${mine.id}`} />
                        <div className="mine-cost">Cost: {mine.cost} gold</div>
                        <div className="mine-income">+{mine.income} gold/hour</div>
                        <div className="mine-level">lvl {mine.currentLevel}</div>
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
