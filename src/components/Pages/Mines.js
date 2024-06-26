import React, { useState, useEffect } from 'react';
import { useUserStats } from '../../context/UserStatsContext';
import { minesData } from '../../data/minesData';
import CardList from '../Cards/CardList';
import UpgradeCard from '../Cards/UpgradeCard';

const Mines = () => {
    const { userStats, updateUserStats } = useUserStats();
    const [selectedCard, setSelectedCard] = useState(null);

    useEffect(() => {
        if (userStats.mines.length === 0) {
            updateUserStats({ mines: minesData });
        }
    }, [userStats.mines, updateUserStats]);

    const handleCardClick = (card) => {
        setSelectedCard(card);
    };

    const updateCard = (id, newLevel, newIncome, newUpgradeCost) => {
        const updatedMines = userStats.mines.map(mine => {
            if (mine.id === id) {
                return {
                    ...mine,
                    currentLevel: newLevel,
                    income: newIncome,
                    upgradeCost: newUpgradeCost,
                };
            }
            return mine;
        });

        const newHourlyIncome = updatedMines.reduce((total, mine) => {
            return total + (mine.currentLevel > 0 ? mine.income : 0);
        }, 0);

        updateUserStats({
            mines: updatedMines,
            hourlyIncome: newHourlyIncome,
        });
    };

    return (
        <div>
            <h2>Mines</h2>
            {selectedCard ? (
                <UpgradeCard card={selectedCard} updateCard={updateCard} />
            ) : (
                <CardList cards={userStats.mines} onCardClick={handleCardClick} />
            )}
        </div>
    );
};

export default Mines;
