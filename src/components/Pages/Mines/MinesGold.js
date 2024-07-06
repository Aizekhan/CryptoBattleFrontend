import React from 'react';
import CardList from '../../Cards/CardList';
import { useUserStats } from '../../../context/UserStatsContext';

const MinesGold = () => {
    const { userStats } = useUserStats();

    const goldMines = userStats.mines.filter(card => card.tag === 'goldMine');

    return (
        <div className="mines-gold">
            <CardList cards={goldMines} />
        </div>
    );
};

export default MinesGold;
