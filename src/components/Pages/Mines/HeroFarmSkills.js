import React from 'react';
import CardList from '../../Cards/CardList';
import { useUserStats } from '../../../context/UserStatsContext';

const HeroFarmSkills = () => {
    const { userStats } = useUserStats();
    const currentHeroId = userStats.currentHeroId;

    // Отримуємо всі карти для поточного героя
    const heroCards = userStats.heroes.find(hero => hero.id === currentHeroId)?.cards || [];

    // Отримуємо фермерські навички для поточного героя
    const heroFarmSkills = heroCards.filter(card => card.tag === 'farmSkill');

    // Отримуємо першу фермерську навичку
    const firstHeroFarmSkill = heroFarmSkills.length > 0 ? [heroFarmSkills[0]] : [];

    return (
        <div className="hero-farm-skills">
            <CardList cards={firstHeroFarmSkill} />
        </div>
    );
};

export default HeroFarmSkills;