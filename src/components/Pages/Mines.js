// src/components/Pages/Mines.js

import React from 'react';
import './Mines.css';
import img1 from '../assets/images/MinesPageImages/1.png';
import img2 from '../assets/images/MinesPageImages/2.png';
import img3 from '../assets/images/MinesPageImages/3.png';
import img4 from '../assets/images/MinesPageImages/4.png';
import img5 from '../assets/images/MinesPageImages/5.png';
import img6 from '../assets/images/MinesPageImages/6.png';
import img7 from '../assets/images/MinesPageImages/7.png';
import img8 from '../assets/images/MinesPageImages/8.png';
import img9 from '../assets/images/MinesPageImages/9.png';

const minesData = [
    { id: 1, cost: 100, income: 10, image: img1 },
    { id: 2, cost: 200, income: 20, image: img2 },
    { id: 3, cost: 300, income: 30, image: img3 },
    { id: 4, cost: 400, income: 40, image: img4 },
    { id: 5, cost: 500, income: 50, image: img5 },
    { id: 6, cost: 600, income: 60, image: img6 },
    { id: 7, cost: 700, income: 70, image: img7 },
    { id: 8, cost: 800, income: 80, image: img8 },
    { id: 9, cost: 900, income: 90, image: img9 },
];

const Mines = () => {
    return (
        <div className="mines-container">
            <h1>Mines Page</h1>
            <div className="mines-grid">
                {minesData.map(mine => (
                    <div key={mine.id} className="mine-item">
                        <img src={mine.image} alt={`Mine ${mine.id}`} />
                        <div className="mine-cost">Cost: {mine.cost} gold</div>
                        <div className="mine-income">+{mine.income} gold/hour</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Mines;
