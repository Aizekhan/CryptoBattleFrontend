import React from 'react';
import { useUserStats } from '../UserStatsContext'; // Піднятись на рівень вище, потім перейти до UserStatsContext.js
import UpgradeCard from '../UpgradeCard'; // Піднятись на рівень вище, потім перейти до UpgradeCard.js
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
