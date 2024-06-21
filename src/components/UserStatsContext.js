import React, { createContext, useContext, useState, useEffect } from 'react';

// Створення контексту
const UserStatsContext = createContext();

// Експорт функції для використання контексту
export const useUserStats = () => useContext(UserStatsContext);

// Провайдер контексту
export const UserStatsProvider = ({ children }) => {
    const [userStats, setUserStats] = useState({
        username: '',
        level: 0,
        tapIncome: 1,
        hourlyIncome: 10000,
        balance: 1000000,
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
            balance: prevStats.balance + prevStats.hourlyIncome / 3600
        }));
    };

    const spendBalance = (amount) => {
        setUserStats((prevStats) => ({
            ...prevStats,
            balance: prevStats.balance - amount
        }));
    };

    useEffect(() => {
        const interval = setInterval(() => {
            incrementBalance();
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <UserStatsContext.Provider value={{ userStats, updateUserStats, spendBalance }}>
            {children}
        </UserStatsContext.Provider>
    );
};
