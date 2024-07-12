import React from 'react';
import CardList from '../../Cards/CardList';
import { useUserStats } from '../../../context/UserStatsContext';
import { getCardListByTag } from '../../Cards/cardUtils';

const MinesGold = () => {
    const { userStats } = useUserStats();

    // Отримуємо картки золотих шахт поточного героя
    const goldMineCards = getCardListByTag(userStats, 'goldMine');

    return (
        <div className="mines-gold">
            <CardList cards={goldMineCards} />
        </div>
    );
};

export default MinesGold;
