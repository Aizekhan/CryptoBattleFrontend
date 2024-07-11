import React from 'react';
import CardList from '../../Cards/CardList';
import { useUserStats } from '../../../context/UserStatsContext';
import { getCardListByTag } from '../../Cards/cardUtils';

const MinesGold = () => {
    const { userStats } = useUserStats();

    // Отримуємо картки золотих шахт поточного героя
    const goldMines = getCardListByTag(userStats, 'goldMine');

    console.log('userStats:', userStats);
    console.log('goldMines:', goldMines);

    return (
        <div className="mines-gold">
            <CardList cards={goldMines} />
        </div>
    );
};

export default MinesGold;
