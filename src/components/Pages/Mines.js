import React, { useState, useContext } from 'react';
import './Mines.css';
import { UserStatsContext } from '../UserStatsContext';
import { minesData, lockImage } from '../../data/minesData';

const Mines = () => {
    const { userStats, setUserStats } = useContext(UserStatsContext);
    const [selectedMine, setSelectedMine] = useState(null);

    const handleUpgrade = (mineId) => {
        const mineIndex = userStats.mines.findIndex(mine => mine.id === mineId);
        const updatedMines = [...userStats.mines];
        const selectedMine = updatedMines[mineIndex];

        if (userStats.gold >= selectedMine.cost) {
            selectedMine.level += 1;
            selectedMine.cost *= 2;
            selectedMine.income *= 2;

            setUserStats({
                ...userStats,
                gold: userStats.gold - selectedMine.cost,
                mines: updatedMines,
            });
            setSelectedMine(null);
        }
    };

    return (
        <div className="mines-container">
            <h1>Mines Page</h1>
            <div className="mines-grid">
                {minesData.map((mine, index) => {
                    const userMine = userStats.mines.find((m) => m.id === mine.id) || mine;
                    return (
                        <div key={mine.id} className="mine-item" onClick={() => setSelectedMine(userMine)}>
                            <img src={userMine.locked ? lockImage : mine.img} alt={`Mine ${mine.id}`} />
                            <div className="mine-cost">Вартість: {userMine.cost} золота</div>
                            <div className="mine-income">+{userMine.income} золота/год</div>
                            <div className="mine-level">lvl: {userMine.level}</div>
                        </div>
                    );
                })}
            </div>
            {selectedMine && (
                <div className="mine-upgrade-panel">
                    <h2>Upgrade Mine</h2>
                    <img src={selectedMine.img} alt={`Mine ${selectedMine.id}`} />
                    <div>Вартість апгрейду: {selectedMine.cost} золота</div>
                    <div>Дохід: +{selectedMine.income} золота/год</div>
                    <div>Поточний рівень: {selectedMine.level}</div>
                    <div className="upgrade-buttons">
                        <button onClick={() => handleUpgrade(selectedMine.id)}>Upgrade</button>
                        <button onClick={() => setSelectedMine(null)}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Mines;
