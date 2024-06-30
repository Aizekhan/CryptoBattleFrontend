import React from 'react';
import CardList from '../../Cards/CardList';
import { useUserStats } from '../../../context/UserStatsContext';
import cardsConfig from '../../Cards/cardsConfig';

const HeroEquipment = () => {
    const { userStats } = useUserStats();
    const currentHero = userStats.heroes.find(hero => hero.id === userStats.currentHeroId);

    const heroEquipment = currentHero && Array.isArray(currentHero.equipment)
        ? cardsConfig.filter(card => card.tag === 'equip' && currentHero.equipment.includes(card.id))
        : [];

    return <CardList cards={heroEquipment} />;
};

export default HeroEquipment;