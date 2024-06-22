import React, { useState } from 'react';
import { useUserStats } from '../UserStatsContext';
import UpgradePanel from '../Panels/UpgradePanel';
import { minesData, lockImage } from '../../data/minesData';
import './Mines.css';

const Mines = () => {
    const { userStats, upgradeMine } = useUserStats();
    const [selectedMine, setSelectedMine] = useState(null);

    const handleUpgradeClick = (mine) => {
        if (!mine.locked) {
            setSelectedMine(mine);
        }
    };

    const handleClosePanel = () => {
        setSelectedMine(null);
    };

    return (
        <div className="mines-container">
            <h1>Mines Page</h1>
            <div className="mines-grid">
                {userStats.mines.map((mine) => (
                    <div key={mine.id} className={`mine-item ${mine.locked ? 'locked' : ''}`} onClick={() => handleUpgradeClick(mine)}>
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
                    onClose={handleClosePanel}
                    onUpgrade={upgradeMine}
                />
            )}
        </div>
    );
};

export default Mines;
