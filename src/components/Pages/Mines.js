// src/components/Pages/Mines.js

import React, { useState } from 'react';
import './Mines.css';
import img1 from '../../assets/images/MinesPageImages/1.png';
import img2 from '../../assets/images/MinesPageImages/2.png';
import img3 from '../../assets/images/MinesPageImages/3.png';
import img4 from '../../assets/images/MinesPageImages/4.png';
import img5 from '../../assets/images/MinesPageImages/5.png';
import img6 from '../../assets/images/MinesPageImages/6.png';
import img7 from '../../assets/images/MinesPageImages/7.png';
import img8 from '../../assets/images/MinesPageImages/8.png';
import img9 from '../../assets/images/MinesPageImages/9.png';
import lockImg from '../../assets/images/lock.png';

const initialMinesData = [
    { id: 1, cost: 100, income: 10, level: 1, locked: false, img: img1 },
    { id: 2, cost: 200, income: 20, level: 0, locked: true, img: img2 },
    { id: 3, cost: 300, income: 30, level: 0, locked: true, img: img3 },
    { id: 4, cost: 400, income: 40, level: 0, locked: true, img: img4 },
    { id: 5, cost: 500, income: 50, level: 0, locked: true, img: img5 },
    { id: 6, cost: 600, income: 60, level: 0, locked: true, img: img6 },
    { id: 7, cost: 700, income: 70, level: 0, locked: true, img: img7 },
    { id: 8, cost: 800, income: 80, level: 0, locked: true, img: img8 },
    { id: 9, cost: 900, income: 90, level: 0, locked: true, img: img9 },
];

const Mines = ({ balance, setBalance }) => {
    const [mines, setMines] = useState(initialMinesData);
    const [selectedMine, setSelectedMine] = useState(null);

    const upgradeMine = () => {
        if (selectedMine && balance >= selectedMine.cost) {
            const updatedMines = mines.map(mine => {
                if (mine.id === selectedMine.id) {
                    const newLevel = mine.level + 1;
                    const newCost = mine.cost * 2;
                    const newIncome = mine.income * 2;
                    return {
                        ...mine,
                        level: newLevel,
                        cost: newCost,
                        income: newIncome,
                        locked: false
                    };
                }
                if (mine.id === selectedMine.id + 1 && mine.level >= 3) {
                    return { ...mine, locked: false };
                }
                return mine;
            });
            setBalance(balance - selectedMine.cost);
            setMines(updatedMines);
            setSelectedMine(null);
        }
    };

    const selectMine = (mine) => {
        if (!mine.locked) {
            setSelectedMine(mine);
        }
    };

    return (
        <div className="mines-container">
            <h1>Mines Page</h1>
            <div className="mines-grid">
                {mines.map(mine => (
                    <div key={mine.id} className="mine-item" onClick={() => selectMine(mine)}>
                        <img src={mine.locked ? lockImg : mine.img} alt={`Mine ${mine.id}`} />
                        <div className="mine-cost">Cost: {mine.cost} gold</div>
                        <div className="mine-income">+{mine.income} gold/hour</div>
                        <div className="mine-level">lvl {mine.level}</div>
                    </div>
                ))}
            </div>
            {selectedMine && (
                <div className="upgrade-panel">
                    <h2>Mine {selectedMine.id}</h2>
                    <img src={selectedMine.img} alt={`Mine ${selectedMine.id}`} />
                    <div>Current Income: +{selectedMine.income} gold/hour</div>
                    <div>Upgrade Cost: {selectedMine.cost}</div>
                    <button onClick={upgradeMine}>Upgrade</button>
                    <button onClick={() => setSelectedMine(null)}>Close</button>
                </div>
            )}
        </div>
    );
};

export default Mines;
