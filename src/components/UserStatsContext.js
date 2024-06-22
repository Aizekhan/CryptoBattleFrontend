import React, { createContext, useContext, useState, useEffect } from 'react';
import { minesData } from '../data/minesData';

const UserStatsContext = createContext();

export const useUserStats = () => useContext(UserStatsContext);

export const UserStatsProvider = ({ children }) => {
    const [userStats, setUserStats] = useState({
        username: '',
        level: 0,
        tapIncome: 1,
        hourlyIncome: 10000,
        balance: 1000000,
        mines: minesData.map(mine => ({ ...mine, currentLevel: 0 })),
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
                if (mine.id === mineId) {
                    const upgradeCost = mine.cost * (2 ** mine.currentLevel);
                    if (prevStats.balance >= upgradeCost) {
                        return {
                            ...mine,
                            currentLevel: mine.currentLevel + 1,
                            income: mine.income * 2,
                            cost: upgradeCost * 2,
                        };
                    }
                }
                return mine;
            });

            const unlockedMines = updatedMines.map((mine, index) => {
                if (index > 0 && updatedMines[index - 1].currentLevel >= 3) {
                    return {
                        ...mine,
                        locked: false,
                    };
                }
                return mine;
            });

            return {
                ...prevStats,
                mines: unlockedMines,
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
