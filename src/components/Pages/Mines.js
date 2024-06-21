// src/components/Pages/Mines.js

import React, { useState } from 'react';
import './Mines.css';
import { minesData, lockImage } from '../../data/minesData';

const Mines = ({ userGold, upgradeMine, mines }) => {
    const [selectedMine, setSelectedMine] = useState(null);

    const handleUpgrade = () => {
        if (userGold >= mines[selectedMine].upgradeCost) {
            upgradeMine(selectedMine);
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
                <div className="mine-upgrade-panel">
                    <h2>Mine {mines[selectedMine].id}</h2>
                    <img src={mines[selectedMine].img} alt={`Mine ${mines[selectedMine].id}`} />
                    <div>Current Income: {mines[selectedMine].income} gold/hour</div>
                    <div>Upgrade Cost: {mines[selectedMine].upgradeCost} gold</div>
                    <div>Level: {mines[selectedMine].level}</div>
                    <button onClick={handleUpgrade}>Upgrade</button>
                    <button onClick={() => setSelectedMine(null)}>Close</button>
                </div>
            )}
        </div>
    );
};

export default Mines;
