import React from 'react';
import CardList from '../../Cards/CardList';
import { miningSkills } from '../../Cards/cardsConfig'; // Імпортуємо тільки карти шахт

const MiningSkills = () => {
    return <CardList cards={miningSkills} />;
};

export default MiningSkills;