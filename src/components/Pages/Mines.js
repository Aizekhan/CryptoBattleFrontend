import React, { useState } from 'react';
import './Mines.css';
import { useUserStats } from '../UserStatsContext';
import UpgradeCard from '../UpgradeCard';

const Mines = () => {
    const { userStats } = useUserStats();
    const [selectedMine, setSelectedMine] = useState(null);

    const openUpgradeCard = (mine) => {
        setSelectedMine(mine);
    };

    const closeUpgradeCard = () => {
        setSelectedMine(null);
    };

    const handleUpgrade = (mineId) => {
        // Логіка апгрейду
        closeUpgradeCard();
    };

    return (
        <div className="mines-container">
            <h1>Mines Page</h1>
            <div className="mines-grid">
                {userStats.mines.map(mine => (
                    <div key={mine.id} className={`mine-item ${mine.locked ? 'locked' : ''}`}>
                        <img src={mine.img} alt={`Mine ${mine.id}`} />
                        <div className="mine-cost">Вартість: {mine.cost} золота</div>
                        <div className="mine-income">+{mine.income} золота/год</div>
                        <div className="mine-level">lvl: {mine.currentLevel}</div>
                        {!mine.locked && (
                            <button className="upgrade-button" onClick={() => openUpgradeCard(mine)}>Прокачати</button>
                        )}
                    </div>
                ))}
            </div>
            {selectedMine && (
                <UpgradeCard 
                    mine={selectedMine} 
                    onClose={closeUpgradeCard} 
                    onUpgrade={handleUpgrade} 
                />
            )}
        </div>
    );
};

export default Mines;
