import React from 'react';
import CardList from '../../Cards/CardList';
import { farmSkills } from '../../Cards/cardsConfig'; // ��������� named export

const FarmSkills = () => {
    return <CardList cards={farmSkills} />;
};

export default FarmSkills;