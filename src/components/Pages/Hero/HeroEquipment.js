import React from 'react';
import CardList from '../../Cards/CardList';
import { useUserStats } from '../../../.context/UserStatsContext';
import { getCardListByTag } from '../../Cards/cardUtils';

const HeroEquipment = () => {
    const { userStats } = useUserStats();

    // Отримуємо спорядження поточного героя
    const heroEquipment = getCardListByTag(userStats, 'equip');

    return (
        <div className="hero-equipment">
            <CardList cards={heroEquipment} />
        </div>
    );
};

export default HeroEquipment;
