import React, { createContext, useContext, useState } from 'react';

const UserStatsContext = createContext();

export const useUserStats = () => useContext(UserStatsContext);

export const UserStatsProvider = ({ children }) => {
    const [userStats, setUserStats] = useState({
        username: '',
        level: 0,
        tapIncome: 1,
        hourlyIncome: 1000,
        balance: 1000000,
        mines: [],
    });

    return (
        <UserStatsContext.Provider value={{ userStats, setUserStats }}>
            {children}
        </UserStatsContext.Provider>
    );
};
