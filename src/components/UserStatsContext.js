import React, { createContext, useContext, useState, useEffect } from 'react';
import { minesData } from '../data/minesData';

const UserStatsContext = createContext();

export const useUserStats = () => useContext(UserStatsContext);

export const UserStatsProvider = ({ children }) => {
    const [userStats, setUserStats] = useState({
        username: '',
        balance: 1000000,
        hourlyIncome: 1000, // Встановіть початковий дохід на годину
        cards: [
            ...minesData.map(card => ({
                ...card,
                type: 'mine',
                currentLevel: 0,
                cost: card.cost,
                previousCost: card.cost
            })),
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
            const cardIndex = prevStats.cards.findIndex(card => card.id === cardId);
            const card = prevStats.cards[cardIndex];
            const upgradeCost = card.previousCost * card.scale;

            // Перевірка, чи можна апгрейдити карту
            if (prevStats.balance < upgradeCost) {
                return prevStats; // Якщо баланс недостатній, нічого не змінюємо
            }
            if (cardIndex > 0 && prevStats.cards[cardIndex - 1].currentLevel < 3) {
                return prevStats; // Якщо попередня карта не досягла 3 рівня, нічого не змінюємо
            }

            // Виконання апгрейду
            const updatedCard = {
                ...card,
                currentLevel: card.currentLevel + 1,
                cost: upgradeCost,
                previousCost: upgradeCost,
                income: card.income * 2, // Збільшуємо дохід карти
            };

            const updatedCards = [...prevStats.cards];
            updatedCards[cardIndex] = updatedCard;

            // Перерахунок загального доходу на годину
            const totalHourlyIncome = updatedCards.reduce((total, card) => total + card.income, 0);

            return {
                ...prevStats,
                cards: updatedCards,
                balance: prevStats.balance - upgradeCost,
                hourlyIncome: totalHourlyIncome,
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
