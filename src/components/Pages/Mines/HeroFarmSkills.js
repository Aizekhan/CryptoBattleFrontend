import React from 'react';
import CardList from '../../Cards/CardList';
import { useUserStats } from '../../../context/UserStatsContext';

const HeroFarmSkills = () => {
    const { userStats } = useUserStats();
    const currentHeroId = userStats.currentHeroId;

    // Отримуємо фермерські навички поточного героя
    const heroFarmSkills = userStats.heroes.find(hero => hero.id === currentHeroId)?.farmSkills || [];

    return (
        <div className="hero-farm-skills">
            <CardList cards={heroFarmSkills} />
        </div>
    );
};

export default HeroFarmSkills;