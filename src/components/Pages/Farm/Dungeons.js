import React from 'react';
import CardList from '../../Cards/CardList';
import { useUserStats } from '../../../context/UserStatsContext';
import { getCardListByTag } from '../../Cards/cardUtils';

const Dungeons = () => {
    const { userStats } = useUserStats();

    // Отримуємо картки підземель поточного героя
    const dungeonCards = getCardListByTag(userStats, 'dungeon');

    return (
        <div className="dungeons">
            <CardList cards={dungeonCards} />
        </div>
    );
};

export default Dungeons;
