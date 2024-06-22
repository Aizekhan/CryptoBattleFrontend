// src/components/Pages/Mines.js

import React, { useState, useContext } from 'react';
import './Mines.css';
import { minesData } from '../../data/minesData';
import { UserStatsContext } from '../../context/UserStatsContext';
import UpgradePanel from '../Panels/UpgradePanel';

const Mines = () => {
    const { userStats, upgradeMine } = useContext(UserStatsContext);
    const [selectedMine, setSelectedMine] = useState(null);

    const handleMineClick = (mine) => {
        setSelectedMine(mine);
    };

    return (
        <div className="mines-container">
            <h1>Mines Page</h1>
            <div className="mines-grid">
                {userStats.mines.map(mine => (
                    <div key={mine.id} className="mine-item" onClick={() => handleMineClick(mine)}>
                        <img src={mine.img} alt={`Mine ${mine.id}`} />
                        <div className="mine-cost">Вартість: {mine.cost} золота</div>
                        <div className="mine-income">+{mine.income} золота/год</div>
                        <div className="mine-level">lvl: {mine.level}</div>
                    </div>
                ))}
            </div>
            {selectedMine && (
                <UpgradePanel 
                    mine={selectedMine} 
                    onClose={() => setSelectedMine(null)} 
                    onUpgrade={() => {
                        upgradeMine(selectedMine.id);
                        setSelectedMine(null);
                    }} 
                />
            )}
        </div>
    );
};

export default Mines;
