import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

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

    useEffect(() => {
        const fetchUserStats = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/user-stats`);
                setUserStats(response.data);
            } catch (error) {
                console.error('Error fetching user stats:', error);
            }
        };

        fetchUserStats();
    }, []);

    const updateUserStats = (newStats) => {
        setUserStats(newStats);
    };

    return (
        <UserStatsContext.Provider value={{ userStats, updateUserStats }}>
            {children}
        </UserStatsContext.Provider>
    );
};
