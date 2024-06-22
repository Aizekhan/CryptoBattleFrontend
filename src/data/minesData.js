import img1 from '../assets/images/MinesPageImages/1.webp';
import img2 from '../assets/images/MinesPageImages/2.webp';
import img3 from '../assets/images/MinesPageImages/3.webp';
import img4 from '../assets/images/MinesPageImages/4.webp';
import img5 from '../assets/images/MinesPageImages/5.webp';
import img6 from '../assets/images/MinesPageImages/6.webp';
import img7 from '../assets/images/MinesPageImages/7.webp';
import img8 from '../assets/images/MinesPageImages/8.webp';
import img9 from '../assets/images/MinesPageImages/9.webp';
import lockImg from '../assets/images/lock.webp';

export const minesData = [
    { id: 1, cost: 100, income: 10, upgradeCost: 50, img: img1, locked: false, level: 0 },
    { id: 2, cost: 200, income: 20, upgradeCost: 100, img: img2, locked: true, level: 0 },
    { id: 3, cost: 300, income: 30, upgradeCost: 150, img: img3, locked: true, level: 0 },
    { id: 4, cost: 400, income: 40, upgradeCost: 200, img: img4, locked: true, level: 0 },
    { id: 5, cost: 500, income: 50, upgradeCost: 250, img: img5, locked: true, level: 0 },
    { id: 6, cost: 600, income: 60, upgradeCost: 300, img: img6, locked: true, level: 0 },
    { id: 7, cost: 700, income: 70, upgradeCost: 350, img: img7, locked: true, level: 0 },
    { id: 8, cost: 800, income: 80, upgradeCost: 400, img: img8, locked: true, level: 0 },
    { id: 9, cost: 900, income: 90, upgradeCost: 450, img: img9, locked: true, level: 0 },
];

export const lockImage = lockImg;
