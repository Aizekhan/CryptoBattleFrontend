import React, { createContext, useContext, useState } from 'react';

const UserStatsContext = createContext();

export const UserStatsProvider = ({ children }) => {
    const [userStats, setUserStats] = useState({
        username: '',
        level: 1,
        tapIncome: 0,
        hourlyIncome: 0,
        balance: 0,
    });

    const updateUserStats = (stats) => {
        setUserStats((prevStats) => ({
            ...prevStats,
            ...stats,
        }));
    };

    return (
        <UserStatsContext.Provider value={{ userStats, updateUserStats }}>
            {children}
        </UserStatsContext.Provider>
    );
};

export const useUserStats = () => {
    return useContext(UserStatsContext);
};