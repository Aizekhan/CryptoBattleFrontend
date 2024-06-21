import React, { createContext, useState, useContext } from 'react';

const UserStatsContext = createContext();

export const UserStatsProvider = ({ children }) => {
    const [userStats, setUserStats] = useState({
        username: 'User',
        level: 0,
        balance: 0,
        hourlyIncome: 10
    });

    const updateUserStats = (newStats) => {
        setUserStats((prevStats) => ({ ...prevStats, ...newStats }));
    };

    return (
        <UserStatsContext.Provider value={{ userStats, updateUserStats }}>
            {children}
        </UserStatsContext.Provider>
    );
};

export const useUserStats = () => useContext(UserStatsContext);
