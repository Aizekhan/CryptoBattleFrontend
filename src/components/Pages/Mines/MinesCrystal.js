import React from 'react';
import CardList from '../../Cards/CardList';
import image7 from '../../../assets/images/MinesPageImages/7.png';
import image8 from '../../../assets/images/MinesPageImages/8.png';
import image9 from '../../../assets/images/MinesPageImages/9.png';

const MinesCrystal = () => {
    const crystalCards = [
        { id: 10, name: 'Crystal Mine 1', level: 1, effect: 'Produces crystals', img: image7, prerequisites: [], upgradeCost: 400 },
        { id: 11, name: 'Crystal Mine 2', level: 2, effect: 'Produces more crystals', img: image8, prerequisites: [{ id: 10, level: 3 }], upgradeCost: 450 },
        { id: 12, name: 'Crystal Mine 3', level: 3, effect: 'Produces even more crystals', img: image9, prerequisites: [{ id: 11, level: 3 }, { id: 10, level: 5 }], upgradeCost: 500 },
    ];

    return <CardList cards={crystalCards} />;
};

export default MinesCrystal;
