import React from 'react';
import CardList from '../../Cards/CardList';
import image1 from '../../assets/images/MinesPageImages/1.png';
import image2 from '../../assets/images/MinesPageImages/2.png';
import image3 from '../../assets/images/MinesPageImages/3.png';
import image4 from '../../assets/images/MinesPageImages/4.png';
import image5 from '../../assets/images/MinesPageImages/5.png';
import image6 from '../../assets/images/MinesPageImages/6.png';
import image7 from '../../assets/images/MinesPageImages/7.png';
import image8 from '../../assets/images/MinesPageImages/8.png';
import image9 from '../../assets/images/MinesPageImages/9.png';

const MinesGold = () => {
    const goldCards = [
        { id: 1, name: 'Gold Mine 1', level: 0, effect: 'Produces gold', img: image1, prerequisites: [], upgradeCost: 100 },
        { id: 2, name: 'Gold Mine 2', level: 0, effect: 'Produces more gold', img: image2, prerequisites: [{ id: 1, level: 3 }], upgradeCost: 200 },
        { id: 3, name: 'Gold Mine 3', level: 0, effect: 'Produces even more gold', img: image3, prerequisites: [{ id: 2, level: 3 }], upgradeCost: 300 },
        { id: 4, name: 'Resource Mine 1', level: 0, effect: 'Produces resources', img: image4, prerequisites: [], upgradeCost: 150 },
        { id: 5, name: 'Resource Mine 2', level: 0, effect: 'Produces more resources', img: image5, prerequisites: [{ id: 4, level: 3 }], upgradeCost: 250 },
        { id: 6, name: 'Resource Mine 3', level: 0, effect: 'Produces even more resources', img: image6, prerequisites: [{ id: 5, level: 3 }], upgradeCost: 350 },
        { id: 7, name: 'Crystal Mine 1', level: 0, effect: 'Produces crystals', img: image7, prerequisites: [], upgradeCost: 400 },
        { id: 8, name: 'Crystal Mine 2', level: 0, effect: 'Produces more crystals', img: image8, prerequisites: [{ id: 7, level: 3 }], upgradeCost: 450 },
        { id: 9, name: 'Crystal Mine 3', level: 0, effect: 'Produces even more crystals', img: image9, prerequisites: [{ id: 8, level: 3 }, { id: 7, level: 5 }], upgradeCost: 500 },
    ];

    return <CardList cards={goldCards} />;
};

export default MinesGold;
