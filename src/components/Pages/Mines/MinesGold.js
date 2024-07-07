import React from 'react';
import CardList from '../../Cards/CardList';
import { useUserStats } from '../../../context/UserStatsContext';
import { minesCards } from '../../Cards/cardsConfig'; // Імпортуємо тільки minesCards

const MinesGold = () => {
    const { userStats } = useUserStats();

    const goldMines = Array.isArray(userStats.mines)
        ? minesCards.filter(card => userStats.mines.some(mine => mine.id === card.id))
        : [];

    console.log('goldMines:', goldMines); // Додайте це для перевірки відфільтрованих карток

    return (
        <div className="mines-gold">
            <CardList cards={goldMines} />
        </div>
    );
};

export default MinesGold;
