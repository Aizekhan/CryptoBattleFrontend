// src/components/Pages/Mines.js

import React from 'react';
import './Mines.css';

const minesData = [
    { id: 1, cost: 100, income: 10 },
    { id: 2, cost: 200, income: 20 },
    { id: 3, cost: 300, income: 30 },
    { id: 4, cost: 400, income: 40 },
    { id: 5, cost: 500, income: 50 },
    { id: 6, cost: 600, income: 60 },
    { id: 7, cost: 700, income: 70 },
    { id: 8, cost: 800, income: 80 },
    { id: 9, cost: 900, income: 90 },
];

const Mines = () => {
    return (
        <div className="mines-container">
            <h1>Mines Page</h1>
            <div className="mines-grid">
                {minesData.map(mine => (
                    <div key={mine.id} className="mine-item">
                        <img src={`/assets/MinesPageImages/${mine.id}.png`} alt={`Mine ${mine.id}`} />
                        <div className="mine-cost">Cost: {mine.cost} gold</div>
                        <div className="mine-income">+{mine.income} gold/hour</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Mines;