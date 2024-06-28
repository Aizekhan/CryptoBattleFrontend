import React from 'react';
import CardList from '../../Cards/CardList';
import { locationCards } from '../../Cards/cardsConfig';

const Locations = () => {
    return <CardList cards={locationCards} />;
};

export default Locations;
