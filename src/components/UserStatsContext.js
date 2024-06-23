import React, { createContext, useContext, useState, useEffect } from 'react';
import { minesData } from './data/minesData';

const UserStatsContext = createContext();

export const useUserStats = () => useContext(UserStatsContext);

export const UserStatsProvider = ({ children }) => {
    const [userStats, setUserStats] = useState({
        username: '',
        level: 0,
        tapIncome: 1,
        hourlyIncome: 1000,
        balance: 1000000,
        mines: minesData.map(mine => ({ ...mine })),
    });

    const updateUserStats = (stats) => {
        setUserStats((prevStats) => ({
            ...prevStats,
            ...stats,
        }));
    };

    const incrementBalance = () => {
        setUserStats((prevStats) => ({
            ...prevStats,
            balance: prevStats.balance + prevStats.hourlyIncome / 3600,
        }));
    };

    const spendBalance = (amount) => {
        setUserStats((prevStats) => ({
            ...prevStats,
            balance: prevStats.balance - amount,
        }));
    };

    const upgradeMine = (mineId) => {
        setUserStats((prevStats) => {
            const updatedMines = prevStats.mines.map(mine => {
                if (mine.id === mineId && prevStats.balance >= mine.upgradeCost) {
                    const newLevel = mine.currentLevel + 1;
                    const newIncome = mine.income * 2;
                    const newUpgradeCost = mine.upgradeCost * 2;
                    return {
                        ...mine,
                        currentLevel: newLevel,
                        income: newIncome,
                        upgradeCost: newUpgradeCost,
                    };
                }
                return mine;
            });

            // Оновлюємо загальний дохід на основі нового рівня шахт
            const newHourlyIncome = updatedMines.reduce((total, mine) => {
                return total + (mine.currentLevel > 0 ? mine.income : 0);
            }, 0);

            return {
                ...prevStats,
                mines: updatedMines,
                hourlyIncome: newHourlyIncome,
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
        <UserStatsContext.Provider value={{ userStats, updateUserStats, spendBalance, upgradeMine }}>
            {children}
        </UserStatsContext.Provider>
    );
};
