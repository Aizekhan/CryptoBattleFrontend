import React from 'react';
import { useUserStats } from '../UserStatsContext';
import UpgradeCard from '../UpgradeCard';
import './Mines.css';

const Mines = () => {
    const { userStats } = useUserStats();
    const mineCards = userStats.cards.filter(card => card.type === 'mine');

    return (
        <div className="mines-container">
            <h1>Mines Page</h1>
            <div className="mines-grid">
                {mineCards.map(mine => (
                    <UpgradeCard key={mine.id} card={mine} />
                ))}
            </div>
        </div>
    );
};

export default Mines;
