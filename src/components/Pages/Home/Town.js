import React from 'react';
import CardList from '../../Cards/CardList';
import { useUserStats } from '../../../context/UserStatsContext';
import { getCardListByTag } from '../../Cards/cardUtils';

const Town = () => {
    const { userStats } = useUserStats();

    // Отримуємо картки міста поточного героя
    const townCards = getCardListByTag(userStats, 'town');

    return (
        <div className="town">
            <CardList cards={townCards} />
        </div>
    );
};

export default Town;
