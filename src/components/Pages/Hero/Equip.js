import React from 'react';
import CardList from '../../Cards/CardList';
import { equipmentCards } from '../../Cards/cardsConfig';

const Equip = () => {
    return <CardList cards={equipmentCards} />;
};

export default Equip;
