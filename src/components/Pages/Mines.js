import React, { useState } from 'react';
import { useUserStats } from '../UserStatsContext';
import UpgradePanel from '../Panels/UpgradePanel';
import lockImg from '../../assets/images/lock.svg';
import './Mines.css';

const Mines = () => {
    const { userStats } = useUserStats();
    const [selectedMine, setSelectedMine] = useState(null);

    const handleMineClick = (mine, index) => {
        // Перевірка чи попередня шахта досягла третього рівня
        if (index > 0 && userStats.mines[index - 1].currentLevel < 3) {
            return; // Якщо попередня шахта не прокачана до третього рівня, нічого не робимо
        }
        setSelectedMine(mine);
    };

    return (
        <div className="mines-container">
            <h1>Mines Page</h1>
            <div className="mines-grid">
                {userStats.mines.map((mine, index) => (
                    <div key={mine.id} className="mine-item" onClick={() => handleMineClick(mine, index)}>
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
                />
            )}
        </div>
    );
};

export default Mines;
