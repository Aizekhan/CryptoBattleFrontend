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
        mines: minesData.map(mine => ({ ...mine, currentLevel: 1, upgradeCost: mine.cost })),
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
                    const newUpgradeCost = mine.upgradeCost * 2;
                    if (prevStats.balance >= mine.upgradeCost) {
                        return {
                            ...mine,
                            currentLevel: mine.currentLevel + 1,
                            income: mine.income * 2,
                            cost: newUpgradeCost,
                            upgradeCost: newUpgradeCost,
                        };
                    }
                }
                return mine;
            });
            return {
                ...prevStats,
                mines: updatedMines,
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
