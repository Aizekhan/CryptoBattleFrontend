import React from 'react';
import CardList from '../../Cards/CardList';
import { useUserStats } from '../../context/UserStatsContext';
import cardsConfig from '../../Cards/cardsConfig';

const HeroBattleCards = () => {
    const { userStats } = useUserStats();
    const currentHero = userStats.heroes.find(hero => hero.id === userStats.currentHeroId);

    const heroBattleCards = cardsConfig.filter(card => 
        card.tag === 'battleCard' && currentHero.battleCards.includes(card.id)
    );

    return <CardList cards={heroBattleCards} />;
};

export default HeroBattleCards;
