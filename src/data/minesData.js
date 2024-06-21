// src/data/minesData.js

import img1 from '../assets/images/MinesPageImages/1.png';
import img2 from '../assets/images/MinesPageImages/2.png';
import img3 from '../assets/images/MinesPageImages/3.png';
import img4 from '../assets/images/MinesPageImages/4.png';
import img5 from '../assets/images/MinesPageImages/5.png';
import img6 from '../assets/images/MinesPageImages/6.png';
import img7 from '../assets/images/MinesPageImages/7.png';
import img8 from '../assets/images/MinesPageImages/8.png';
import img9 from '../assets/images/MinesPageImages/9.png';
import lockImg from '../assets/images/lock.png';

export const minesData = [
    { id: 1, cost: 100, income: 10, img: img1, locked: false },
    { id: 2, cost: 200, income: 20, img: img2, locked: true },
    { id: 3, cost: 300, income: 30, img: img3, locked: true },
    { id: 4, cost: 400, income: 40, img: img4, locked: true },
    { id: 5, cost: 500, income: 50, img: img5, locked: true },
    { id: 6, cost: 600, income: 60, img: img6, locked: true },
    { id: 7, cost: 700, income: 70, img: img7, locked: true },
    { id: 8, cost: 800, income: 80, img: img8, locked: true },
    { id: 9, cost: 900, income: 90, img: img9, locked: true },
];

export const lockImage = lockImg;