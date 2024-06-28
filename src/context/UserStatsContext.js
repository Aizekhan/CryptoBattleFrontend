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
        mines: [
            { id: 1, level: 0 },
            { id: 2, level: 0 },
            { id: 3, level: 0 },
            { id: 4, level: 0 },
            { id: 5, level: 0 },
            { id: 6, level: 0 },
            { id: 7, level: 0 },
            { id: 8, level: 0 },
            { id: 9, level: 0 },
        ],
    });

    useEffect(() => {
        const fetchUserStats = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/user-stats`);
                setUserStats(response.data);
                console.log('Fetched user stats:', response.data); // Додаємо логування
            } catch (error) {
                console.error('Error fetching user stats:', error);
            }
        };

        fetchUserStats();
    }, []);

    const updateUserStats = (newStats) => {
        setUserStats(prevStats => ({
            ...prevStats,
            ...newStats
        }));
    };

    return (
        <UserStatsContext.Provider value={{ userStats, updateUserStats }}>
            {children}
        </UserStatsContext.Provider>
    );
};
