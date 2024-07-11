import React from 'react';
import CardList from '../../Cards/CardList';
import { useUserStats } from '../../../context/UserStatsContext';
import { getCardListByTag } from '../../Cards/cardUtils';

const HeroFarmSkills = () => {
    const { userStats } = useUserStats();

    // Отримуємо фермерські навички поточного героя
    const heroFarmSkills = getCardListByTag(userStats, 'farmSkill');

    return (
        <div className="hero-farm-skills">
            <CardList cards={heroFarmSkills} />
        </div>
    );
};

export default HeroFarmSkills;
