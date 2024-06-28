import React from 'react';
import CardList from '../../Cards/CardList';
import { passiveSkills } from '../../Cards/cardsConfig';

const Passive = () => {
    return <CardList cards={passiveSkills} />;
};

export default Passive;
