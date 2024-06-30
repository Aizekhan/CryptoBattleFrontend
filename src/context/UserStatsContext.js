import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import heroesConfig from './heroesConfig'; // Імпорт конфігурації героїв

const UserStatsContext = createContext();

export const useUserStats = () => useContext(UserStatsContext);

export const UserStatsProvider = ({ children }) => {
    const [userStats, setUserStats] = useState({
        username: '',
        level: 0,
        tapIncome: 1,
        hourlyIncome: 0,
        balance: 1000000,
        currentHeroId: heroesConfig[0].id,  // Вибраний герой за замовчуванням
        heroes: heroesConfig.map(hero => ({
            ...hero,
            passiveSkills: hero.defaultPassiveSkills,
            equipment: hero.defaultEquipment,
            battleCards: hero.defaultBattleCards,
            farmSkills: hero.defaultFarmSkills
        })),  // Завантажуємо героїв з конфігураційного файлу
        mines: [
            { id: 1, level: 0, baseIncome: 10 },
            { id: 2, level: 0, baseIncome: 20 },
            { id: 3, level: 0, baseIncome: 30 },
            { id: 4, level: 0, baseIncome: 40 },
            { id: 5, level: 0, baseIncome: 50 },
            { id: 6, level: 0, baseIncome: 60 },
            { id: 7, level: 0, baseIncome: 70 },
            { id: 8, level: 0, baseIncome: 80 },
            { id: 9, level: 0, baseIncome: 90 },
        ],
    });

    useEffect(() => {
        const fetchUserStats = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/user-stats`);
                if (response.data) {
                    setUserStats(response.data);
                    console.log('Fetched user stats:', response.data); // Додаємо логування
                }
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

    const updateHeroStats = (heroId, newStats) => {
        setUserStats(prevStats => {
            const updatedHeroes = prevStats.heroes.map(hero => 
                hero.id === heroId ? { ...hero, ...newStats } : hero
            );
            return { ...prevStats, heroes: updatedHeroes };
        });
    };

    const setCurrentHero = (heroId) => {
        setUserStats(prevStats => ({
            ...prevStats,
            currentHeroId: heroId
        }));
    };

    return (
        <UserStatsContext.Provider value={{ userStats, updateUserStats, updateHeroStats, setCurrentHero }}>
            {children}
        </UserStatsContext.Provider>
    );
};
