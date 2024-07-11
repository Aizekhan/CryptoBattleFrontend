import React from 'react';
import CardList from '../../Cards/CardList';
import { useUserStats } from '../../../context/UserStatsContext';
import { getCardListByTag } from '../../Cards/cardUtils';

const HeroPassiveSkills = () => {
    const { userStats } = useUserStats();

    // Отримуємо пасивні навички поточного героя
    const heroPassiveSkills = getCardListByTag(userStats, 'heroStat');

    return (
        <div className="hero-passive-skills">
            <CardList cards={heroPassiveSkills} />
        </div>
    );
};

export default HeroPassiveSkills;
