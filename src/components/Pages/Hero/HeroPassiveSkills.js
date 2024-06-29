import React from 'react';
import CardList from '../../Cards/CardList';
import { useUserStats } from '../../../context/UserStatsContext';
import cardsConfig from '../../Cards/cardsConfig';

const HeroPassiveSkills = () => {
    const { userStats } = useUserStats();
    const currentHero = userStats.heroes.find(hero => hero.id === userStats.currentHeroId);

    const heroPassiveSkills = cardsConfig.filter(card => 
        card.tag === 'heroStat' && currentHero.passiveSkills.includes(card.id)
    );

    return <CardList cards={heroPassiveSkills} />;
};

export default HeroPassiveSkills;
