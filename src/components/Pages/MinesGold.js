import React from 'react';
import CardList from '../Cards/CardList';

import image1 from '../../assets/images/MinesPageImages/1.png';
import image2 from '../../assets/images/MinesPageImages/2.png';

const MinesGold = () => {
    const goldCards = [
        { id: 1, name: 'Gold Mine 1', level: 1, effect: 'Produces gold', img: image1, prerequisites: [], upgradeCost: 100 },
        { id: 2, name: 'Gold Mine 2', level: 2, effect: 'Produces more gold', img: image2, prerequisites: [{ id: 1, level: 3 }], upgradeCost: 200 },
        // Додамо ще одну карту з додатковими умовами
        { id: 3, name: 'Gold Mine 3', level: 3, effect: 'Produces even more gold', img: image1, prerequisites: [{ id: 2, level: 3 }, { id: 1, level: 5 }], upgradeCost: 300 },
    ];

    return <CardList cards={goldCards} />;
};

export default MinesGold;
