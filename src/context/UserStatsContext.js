import React, { createContext, useContext, useState, useEffect } from 'react';
import { minesData } from '../data/minesData';
import axios from 'axios';
import jwt_decode from 'jwt-decode';

const UserStatsContext = createContext();

export const useUserStats = () => useContext(UserStatsContext);

export const UserStatsProvider = ({ children }) => {
    const [userStats, setUserStats] = useState({
        username: '',
        level: 0,
        tapIncome: 1,
        hourlyIncome: 1000,
        balance: 1000000,
        mines: minesData,
    });

    const updateUserStats = (stats) => {
        setUserStats((prevStats) => ({
            ...prevStats,
            ...stats,
        }));
        saveUserStatsToDB({ ...userStats, ...stats });
    };

    const saveUserStatsToDB = async (stats) => {
        try {
            const token = localStorage.getItem('authToken');
            const decoded = jwt_decode(token);
            await axios.put(`/api/users/${decoded.id}`, stats, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
        } catch (error) {
            console.error('Error saving user data:', error);
        }
    };

    const incrementBalance = () => {
        setUserStats((prevStats) => {
            const updatedStats = {
                ...prevStats,
                balance: prevStats.balance + prevStats.hourlyIncome / 3600,
            };
            saveUserStatsToDB(updatedStats);
            return updatedStats;
        });
    };

    const spendBalance = (amount) => {
        setUserStats((prevStats) => {
            const updatedStats = {
                ...prevStats,
                balance: prevStats.balance - amount,
            };
            saveUserStatsToDB(updatedStats);
            return updatedStats;
        });
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
