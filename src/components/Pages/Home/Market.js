import React from 'react';
import CardList from '../../Cards/CardList';
import { marketCards } from '../../Cards/cardsConfig';

const Market = () => {
    return <CardList cards={marketCards} />;
};

export default Market;