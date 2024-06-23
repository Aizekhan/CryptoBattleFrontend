import React, { createContext, useContext, useState, useEffect } from 'react';
import { minesData } from '../data/minesData'; // Переконайтеся, що цей шлях правильний

const UserStatsContext = createContext();

export const useUserStats = () => useContext(UserStatsContext);

export const UserStatsProvider = ({ children }) => {
    const [userStats, setUserStats] = useState({
        username: '',
        balance: 1000000,
        cards: [
            ...minesData.map(card => ({
                ...card,
                type: 'mine',
                currentLevel: 0,
                cost: card.cost,
                previousCost: card.cost
            })),
            // Видаліть або додайте інші типи карток тут
        ],
    });

    const updateUserStats = (stats) => {
        setUserStats(prevStats => ({
            ...prevStats,
            ...stats,
        }));
    };

    const incrementBalance = () => {
        setUserStats(prevStats => ({
            ...prevStats,
            balance: prevStats.balance + prevStats.hourlyIncome / 3600,
        }));
    };

    const upgradeCard = (cardId) => {
        setUserStats(prevStats => {
            const updatedCards = prevStats.cards.map((card, index) => {
                if (card.id === cardId) {
                    const upgradeCost = card.previousCost * card.scale;
                    if (prevStats.balance < upgradeCost) {
                        return card; // Якщо баланс недостатній, нічого не змінюємо
                    }
                    return {
                        ...card,
                        currentLevel: card.currentLevel + 1,
                        cost: upgradeCost,
                        previousCost: upgradeCost,
                    };
                }
                return card;
            });

            return {
                ...prevStats,
                cards: updatedCards,
                balance: prevStats.balance - updatedCards.find(card => card.id === cardId).previousCost,
            };
        });
    };

    useEffect(() => {
        const interval = setInterval(() => {
            incrementBalance();
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <UserStatsContext.Provider value={{ userStats, updateUserStats, upgradeCard }}>
            {children}
        </UserStatsContext.Provider>
    );
};
