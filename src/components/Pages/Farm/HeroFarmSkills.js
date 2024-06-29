import React from 'react';
import CardList from '../../Cards/CardList';
import { useUserStats } from '../../context/UserStatsContext';
import cardsConfig from '../../Cards/cardsConfig';

const HeroFarmSkills = () => {
    const { userStats } = useUserStats();
    const currentHero = userStats.heroes.find(hero => hero.id === userStats.currentHeroId);

    const heroFarmSkills = cardsConfig.filter(card => 
        card.tag === 'farmSkill' && currentHero.farmSkills.includes(card.id)
    );

    return <CardList cards={heroFarmSkills} />;
};

export default HeroFarmSkills;
