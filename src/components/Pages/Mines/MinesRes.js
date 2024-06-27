import React from 'react';
import CardList from '../../Cards/CardList';
import image3 from '../../../assets/images/MinesPageImages/3.png';
import image4 from '../../../assets/images/MinesPageImages/4.png';

const MinesRes = () => {
    const resCards = [
        { id: 3, name: 'Resource Mine 1', level: 1, effect: 'Produces resources', img: image3, prerequisites: [], upgradeCost: 150 },
        { id: 4, name: 'Resource Mine 2', level: 2, effect: 'Produces more resources', img: image4, prerequisites: [{ id: 3, level: 3 }], upgradeCost: 250 },
    ];

    return <CardList cards={resCards} />;
};

export default MinesRes;
