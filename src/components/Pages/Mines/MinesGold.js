import React from 'react';
import CardList from '../../Cards/CardList';
import { useUserStats } from '../../../context/UserStatsContext';

const MinesGold = () => {
    const { userStats } = useUserStats();
    const currentHeroId = userStats.currentHeroId;

    // Отримуємо всі карти для поточного героя
    const heroCards = userStats.heroes.find(hero => hero.id === currentHeroId)?.cards || [];

    // Отримуємо золоті шахти для поточного героя
    const heroGoldMines = heroCards.filter(card => card.tag === 'goldMine');

    return (
        <div className="mines-gold">
            <CardList cards={heroGoldMines} />
        </div>
    );
};

export default MinesGold;
