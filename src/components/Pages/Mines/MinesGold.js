import React from 'react';
import CardList from '../../Cards/CardList';
import { useUserStats } from '../../../context/UserStatsContext';

const MinesGold = () => {
    const { userStats } = useUserStats();

    console.log('userStats:', userStats); // Додайте це для перевірки даних користувача

    const goldMines = userStats.mines.filter(card => card.tag === 'goldMine');

    console.log('goldMines:', goldMines); // Додайте це для перевірки відфільтрованих карток

    return (
        <div className="mines-gold">
            <CardList cards={goldMines} />
        </div>
    );
};

export default MinesGold;
