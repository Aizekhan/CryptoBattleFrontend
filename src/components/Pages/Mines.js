import React, { useState } from 'react';
import './Mines.css';
import { useUserStats } from '../UserStatsContext';
import UpgradePanel from '../Panels/UpgradePanel';

const Mines = () => {
    const { userStats, upgradeMine } = useUserStats();
    const [selectedMine, setSelectedMine] = useState(null);

    const handleUpgrade = (mineId) => {
        upgradeMine(mineId);
        setSelectedMine(null);
    };

    return (
        <div className="mines-page">
            <h1>Mines Page</h1>
            <div className="mines-grid">
                {userStats.mines.map(mine => (
                    <div key={mine.id} className="mine-item">
                        <img
                            src={mine.locked ? '/assets/images/lock.png' : mine.img}
                            alt={`Mine ${mine.id}`}
                            onClick={() => !mine.locked && setSelectedMine(mine)}
                        />
                        <div className="mine-info">
                            <p>Вартість: {mine.cost} золота</p>
                            <p>+{mine.income} золота/год</p>
                            <p>lvl: {mine.currentLevel}</p>
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
