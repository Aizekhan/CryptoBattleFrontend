import React from 'react';
import CardList from '../Cards/CardList';
import image5 from '../../assets/images/MinesPageImages/5.png';
import image6 from '../../assets/images/MinesPageImages/6.png';

const MinesSkills = () => {
    const skillsCards = [
        { id: 5, name: 'Skill Mine 1', level: 1, effect: 'Enhances skills', img: image5, prerequisites: [], upgradeCost: 300 },
        { id: 6, name: 'Skill Mine 2', level: 2, effect: 'Enhances more skills', img: image6, prerequisites: [{ id: 5, level: 3 }], upgradeCost: 350 },
    ];

    return <CardList cards={skillsCards} />;
};

export default MinesSkills;
