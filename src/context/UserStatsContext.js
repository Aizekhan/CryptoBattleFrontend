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
                console.log('Fetched user stats:', response.data); // Додаємо логування
            } catch (error) {
                console.error('Error fetching user stats:', error);
            }
        };

        fetchUserStats();
    }, []);

    const updateUserStats = (newStats) => {
        console.log('Updating user stats:', newStats); // Логування перед оновленням
        setUserStats(prevStats => ({
            ...prevStats,
            ...newStats
        }));
        console.log('Updated user stats:', userStats); // Логування після оновлення
    };

    return (
        <UserStatsContext.Provider value={{ userStats, updateUserStats }}>
            {children}
        </UserStatsContext.Provider>
    );
};
