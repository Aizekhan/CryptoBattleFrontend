import React from 'react';
import CardList from '../../Cards/CardList';
import { miningSkills } from '../../Cards/cardsConfig'; // Імпортуємо тільки карти шахт

const MinesSkills = () => {
    return <CardList cards={miningSkills} />;
};

export default MinesSkills;