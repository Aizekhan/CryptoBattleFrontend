import React from 'react';
import CardList from '../../Cards/CardList';
import { battleCards } from '../../Cards/cardsConfig';

const BattleCards = () => {
    return <CardList cards={battleCards} />;
};

export default BattleCards;
