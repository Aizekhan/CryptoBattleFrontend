import React from 'react';
import CardList from '../../Cards/CardList';
import { minesCards } from '../../Cards/cardsConfig'; // Імпортуємо named export

const MinesGold = () => {
    return <CardList cards={minesCards} />;
};

export default MinesGold;
