import React from 'react';
import CardList from '../../Cards/CardList';
import { useUserStats } from '../../../context/UserStatsContext';
import cardsConfig from '../../Cards/cardsConfig';

const MinesGold = () => {
    const { userStats } = useUserStats();

    const goldMines = Array.isArray(userStats.mines)
        ? cardsConfig.filter(card => card.tag === 'goldMine' && userStats.mines.some(mine => mine.id === card.id))
        : [];

    console.log('goldMines:', goldMines); // Додайте це для перевірки відфільтрованих карток

    return (
        <div className="mines-gold">
            <CardList cards={goldMines} />
        </div>
    );
};

export default MinesGold;
