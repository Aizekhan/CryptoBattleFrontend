import React from 'react';
import CardList from '../../Cards/CardList';
import { useUserStats } from '../../../context/UserStatsContext';

const MinesGold = () => {
    const { userStats } = useUserStats();
    const currentHeroId = userStats.currentHeroId;

    // Отримуємо шахти поточного героя
    const heroGoldMines = userStats.heroes.find(hero => hero.id === currentHeroId)?.minesGoldCards || [];

    return (
        <div className="mines-gold">
            <CardList cards={heroGoldMines} />
        </div>
    );
};

export default MinesGold;